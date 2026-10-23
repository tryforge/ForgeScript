"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = exports.PrefixMode = void 0;
const core_1 = require("../../core");
const ForgeError_1 = require("../forge/ForgeError");
const COMMAND_INTERACTION_TYPES = [
    "button",
    "modal",
    "slashCommand",
    "autocomplete",
    "contextMenu",
    "userContextMenu",
    "messageContextMenu",
    "selectMenu",
    "userSelectMenu",
    "roleSelectMenu",
    "channelSelectMenu",
    "mentionableSelectMenu",
    "activityCommand",
    "messageComponent"
];
var PrefixMode;
(function (PrefixMode) {
    /**
     * The command requires a prefix to be executed. This is the default mode.
     */
    PrefixMode[PrefixMode["Required"] = 0] = "Required";
    /**
     * The command can be executed with or without a prefix.
     */
    PrefixMode[PrefixMode["Optional"] = 1] = "Optional";
    /**
     * The command requires no prefix to be executed (unprefixed).
     */
    PrefixMode[PrefixMode["None"] = 2] = "None";
})(PrefixMode || (exports.PrefixMode = PrefixMode = {}));
let id = 0;
class BaseCommand {
    data;
    compiled;
    id = ++id;
    constructor(data) {
        this.data = data;
        if (data.code === undefined)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.MissingCommandCode, this.path);
        this._validateType("name", data.name, "string");
        this._validateType("code", data.code, "string");
        this.compiled = {
            name: core_1.Compiler.compile(data.name, this.data.path),
            code: core_1.Compiler.compile(data.code, this.data.path),
        };
    }
    setPath(p) {
        this.data.path = p;
        return this;
    }
    validate() {
        const d = this.data;
        if (!d.type)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.MissingCommandType, this.path);
        this._validateType("guildOnly", d.guildOnly, "boolean");
        this._validateType("unprefixed", d.unprefixed, "boolean");
        this._validateType("allowBots", d.allowBots, "boolean");
        this._validateType("disableConsoleErrors", d.disableConsoleErrors, "boolean");
        this._validateType("nameCaseInsensitive", d.nameCaseInsensitive, "boolean");
        if (d.prefixMode !== undefined && PrefixMode[d.prefixMode] === undefined)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.InvalidPropertyType, "prefixMode", "PrefixMode", this.path);
        if (d.aliases !== undefined && (!Array.isArray(d.aliases) || d.aliases.some((x) => typeof x !== "string")))
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.InvalidPropertyType, "aliases", "string[]", this.path);
        if (d.allowedInteractionTypes !== undefined && (!Array.isArray(d.allowedInteractionTypes) ||
            d.allowedInteractionTypes.some((x) => !COMMAND_INTERACTION_TYPES.includes(x)))) {
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.InvalidPropertyType, "allowedInteractionTypes", "CommandInteractionTypes[]", this.path);
        }
    }
    static from(code) {
        return new this({
            code,
            type: null
        });
    }
    get name() {
        return this.data.name;
    }
    get type() {
        return this.data.type;
    }
    get path() {
        return this.data.path ?? "index file";
    }
    hasDisabledConsoleErrors(client) {
        return this.data.disableConsoleErrors || (this.data.disableConsoleErrors === undefined && client.options.disableConsoleErrors);
    }
    matchesInteractionType(i) {
        return (!this.data.name ||
            ("customId" in i &&
                this.data.name === i.customId)) && (!this.data.allowedInteractionTypes?.length || (this.data.allowedInteractionTypes.some(type => (type === "button" && i.isButton()) ||
            (type === "modal" && i.isModalSubmit()) ||
            (type === "slashCommand" && i.isChatInputCommand()) ||
            (type === "autocomplete" && i.isAutocomplete()) ||
            (type === "selectMenu" && i.isAnySelectMenu()) ||
            (type === "userSelectMenu" && i.isUserSelectMenu()) ||
            (type === "roleSelectMenu" && i.isRoleSelectMenu()) ||
            (type === "channelSelectMenu" && i.isChannelSelectMenu()) ||
            (type === "mentionableSelectMenu" && i.isMentionableSelectMenu()) ||
            (type === "contextMenu" && i.isContextMenuCommand()) ||
            (type === "userContextMenu" && i.isUserContextMenuCommand()) ||
            (type === "messageContextMenu" && i.isMessageContextMenuCommand()) ||
            (type === "activityCommand" && i.isPrimaryEntryPointCommand()) ||
            (type === "messageComponent" && i.isMessageComponent()))));
    }
    _validateType(key, value, expected) {
        if (value !== undefined && typeof value !== expected)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.InvalidPropertyType, key, expected, this.path);
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map