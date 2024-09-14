"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandManager = exports.RegistrationType = void 0;
/* eslint-disable indent */
const discord_js_1 = require("discord.js");
const ApplicationCommand_1 = require("../structures/base/ApplicationCommand");
const EventManager_1 = require("./EventManager");
const fs_1 = require("fs");
const path_1 = require("path");
const process_1 = require("process");
var RegistrationType;
(function (RegistrationType) {
    RegistrationType[RegistrationType["Global"] = 0] = "Global";
    RegistrationType[RegistrationType["Guild"] = 1] = "Guild";
    RegistrationType[RegistrationType["All"] = 2] = "All";
})(RegistrationType || (exports.RegistrationType = RegistrationType = {}));
class ApplicationCommandManager {
    client;
    /**
     * If:
     * - value is app command = slash command
     * - value is collection:
     *  - value is slash command = subcommands
     *  - value is collection = group with subcommands
     */
    commands = new discord_js_1.Collection();
    path;
    constructor(client) {
        this.client = client;
    }
    /**
     * PATH TREE MATTERS
     * @param path
     */
    load(path = this.path) {
        if (!path)
            return;
        this.path ??= path;
        this.commands.clear();
        for (const mainPath of (0, fs_1.readdirSync)(path)) {
            const resolved = (0, path_1.join)(path, mainPath);
            const stats = (0, fs_1.statSync)(resolved);
            if (stats.isDirectory()) {
                const col = new discord_js_1.Collection();
                for (const secondPath of (0, fs_1.readdirSync)(resolved)) {
                    const secondResolved = (0, path_1.join)(resolved, secondPath);
                    const stats = (0, fs_1.statSync)(secondResolved);
                    if (stats.isDirectory()) {
                        const nextCol = new discord_js_1.Collection();
                        for (const lastPath of (0, fs_1.readdirSync)(secondResolved)) {
                            const thirdResolved = (0, path_1.join)(secondResolved, lastPath);
                            const stats = (0, fs_1.statSync)(thirdResolved);
                            if (stats.isDirectory())
                                throw new Error(`Disallowed folder found for slash command tree: ${thirdResolved}`);
                            const loaded = this.loadOne((0, path_1.join)((0, process_1.cwd)(), thirdResolved));
                            if (!loaded)
                                continue;
                            else if (loaded.options.independent) {
                                this.commands.set(loaded.name, loaded);
                                continue;
                            }
                            nextCol.set(loaded.name, loaded);
                        }
                        if (nextCol.size === 0)
                            continue;
                        col.set(secondPath, nextCol);
                    }
                    else {
                        const loaded = this.loadOne((0, path_1.join)((0, process_1.cwd)(), secondResolved));
                        if (!loaded)
                            continue;
                        else if (loaded.options.independent) {
                            this.commands.set(loaded.name, loaded);
                            continue;
                        }
                        col.set(loaded.name, loaded);
                    }
                }
                if (col.size === 0)
                    continue;
                this.commands.set(mainPath, col);
            }
            else {
                const loaded = this.loadOne((0, path_1.join)((0, process_1.cwd)(), resolved));
                if (!loaded)
                    continue;
                this.commands.set(loaded.name, loaded);
            }
        }
    }
    getDisplayOptions(input, hideName) {
        const arr = new Array();
        for (const data of input) {
            if (data.value !== undefined) {
                arr.push(`${hideName ? "" : `${data.name}: `}${data.value}`);
            }
            else if (data.options?.length)
                arr.push(...this.getDisplayOptions(data.options, hideName));
        }
        return arr;
    }
    getDisplay(input, hideName) {
        if (input instanceof discord_js_1.ChatInputCommandInteraction) {
            const commandName = input.commandName;
            const subcommandName = input.options.getSubcommand(false);
            const subcommandGroupName = input.options.getSubcommandGroup(false);
            const filteredOptions = this.getDisplayOptions(input.options.data, hideName);
            return `/${commandName}${subcommandGroupName
                ? subcommandName
                    ? ` ${subcommandGroupName} ${subcommandName}`
                    : ` ${subcommandGroupName}`
                : subcommandName
                    ? ` ${subcommandName}`
                    : ""} ${filteredOptions.join(" ")}`;
        }
        else if (input instanceof discord_js_1.ContextMenuCommandInteraction)
            return `/${input.commandName}`;
        return null;
    }
    get(input) {
        const commandName = input.commandName;
        if (!input.isChatInputCommand())
            return this.commands.get(commandName);
        const subcommandName = input.options.getSubcommand(false);
        const subcommandGroupName = input.options.getSubcommandGroup(false);
        const cmd = this.commands.get(commandName) ?? null;
        if (cmd instanceof discord_js_1.Collection) {
            const col = cmd.get(subcommandGroupName ?? subcommandName);
            if (col instanceof discord_js_1.Collection) {
                return col.get(subcommandName) ?? null;
            }
            return col ?? null;
        }
        return cmd;
    }
    /**
     * **WARNING** This function does not allow subcommand & subcommand group options. Consider using ApplicationCommandManager#load to load a tree from a folder.
     * @param values
     * @returns
     */
    add(...values) {
        for (const value of values) {
            if (Array.isArray(value))
                return this.add(...value);
            const resolved = this.resolve(value, null);
            this.commands.set(resolved.name, resolved);
        }
    }
    loadOne(reqPath) {
        if (!reqPath.endsWith(".js"))
            return null;
        delete require.cache[require.resolve(reqPath)];
        const req = require(reqPath);
        let value = req.default ?? req;
        if (!value || !Object.keys(value).length)
            return null;
        else if (Array.isArray(value))
            throw new Error("Disallowed");
        return this.resolve(value, reqPath);
    }
    validate(app, path) {
        const json = app.toJSON();
        if (json.options?.some((x) => x.type === discord_js_1.ApplicationCommandOptionType.Subcommand ||
            x.type === discord_js_1.ApplicationCommandOptionType.SubcommandGroup)) {
            throw new Error(`Attempted to define subcommand / subcommand group without using path tree definition. (${path ?? "index file"})`);
        }
    }
    resolve(value, path) {
        const v = value instanceof ApplicationCommand_1.ApplicationCommand ? value : new ApplicationCommand_1.ApplicationCommand({ ...value, path });
        this.validate(v, path);
        return v;
    }
    toJSON(type) {
        const arr = new Array();
        // Helper function to read config.json
        const readConfig = (folderPath) => {
            const configPath = (0, path_1.join)(folderPath, "config.json");
            if ((0, fs_1.existsSync)(configPath)) {
                try {
                    return JSON.parse((0, fs_1.readFileSync)(configPath, "utf-8"));
                }
                catch (err) {
                    throw new Error(`Error reading config.json in ${folderPath}: ${err}`);
                }
            }
            return null;
        };
        for (const [commandName, value] of this.commands) {
            if (value instanceof ApplicationCommand_1.ApplicationCommand) {
                if (!value.mustRegisterAs(type))
                    continue;
                const folderPath = (0, path_1.join)(this.path, commandName);
                const config = readConfig(folderPath);
                const commandData = {
                    ...value.options.data,
                    ...(config ? config : {}),
                };
                arr.push(commandData);
            }
            else {
                const folderPath = (0, path_1.join)(this.path, commandName);
                const config = readConfig(folderPath);
                const json = {
                    ...config,
                    name: commandName,
                    description: config?.description || "none",
                    type: discord_js_1.ApplicationCommandType.ChatInput,
                    options: [],
                };
                for (const [nextName, values] of value) {
                    if (values instanceof discord_js_1.Collection) {
                        const subFolderPath = (0, path_1.join)(folderPath, nextName);
                        const subConfig = readConfig(subFolderPath);
                        // Apply only for subcommand groups
                        const raw = {
                            ...subConfig,
                            name: nextName,
                            description: subConfig?.description || "none",
                            type: discord_js_1.ApplicationCommandOptionType.SubcommandGroup,
                            options: [],
                        };
                        // Only assign `options` if this is a SubcommandGroup
                        if (raw.type === discord_js_1.ApplicationCommandOptionType.SubcommandGroup) {
                            raw.options = [];
                            for (const [lastName, command] of values) {
                                if (!command.mustRegisterAs(type))
                                    continue;
                                const commandData = command.toJSON();
                                raw.options.push({
                                    ...commandData,
                                    name: lastName,
                                    type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                                });
                            }
                        }
                        // Only push `json.options` if it contains valid data
                        if (raw.options?.length) {
                            json.options.push(raw);
                        }
                    }
                    else {
                        if (!values.mustRegisterAs(type))
                            continue;
                        const subFolderPath = (0, path_1.join)(folderPath, nextName);
                        const subConfig = readConfig(subFolderPath);
                        // Add subcommand if available
                        const raw = values.toJSON();
                        json.options.push({
                            ...raw,
                            ...subConfig,
                            type: discord_js_1.ApplicationCommandOptionType.Subcommand,
                        });
                    }
                }
                // Only push JSON if it contains valid options
                if (json.options?.length) {
                    arr.push(json);
                }
            }
        }
        return arr;
    }
    registerGlobal() {
        if (!this.commands.size)
            return;
        this.client.events.load(EventManager_1.NativeEventName, discord_js_1.Events.InteractionCreate);
        return this.client.application.commands.set(this.toJSON(RegistrationType.Global));
    }
    registerGuild(g) {
        if (!this.commands.size)
            return;
        this.client.events.load(EventManager_1.NativeEventName, discord_js_1.Events.InteractionCreate);
        return g.commands.set(this.toJSON(RegistrationType.Guild));
    }
}
exports.ApplicationCommandManager = ApplicationCommandManager;
//# sourceMappingURL=ApplicationCommandManager.js.map