"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommandManager = void 0;
const discord_js_1 = require("discord.js");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const FileReader_1 = require("../core/FileReader");
const structures_1 = require("../structures");
class BaseCommandManager {
    client;
    commands = new discord_js_1.Collection();
    paths = new Array();
    constructor(client) {
        this.client = client;
    }
    refresh() {
        for (const [key, commands] of this.commands) {
            // Unload the ones added thru folders
            const unloadable = commands.filter((x) => !x.unloadable);
            // Keep unloadable
            this.commands.set(key, unloadable);
        }
        for (const p of this.paths) {
            for (const file of (0, recursiveReaddirSync_1.default)(p).filter((x) => x.endsWith(".js") || x.endsWith)) {
                // eslint-disable-next-line no-undef
                const path = `${process.cwd()}/${file}`;
                delete require.cache[require.resolve(path)];
            }
            // Reload these commands
            this.load(p);
        }
    }
    load(path) {
        if (!this.paths.includes(path))
            this.paths.push(path);
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter((x) => x.endsWith(".js") || x.endsWith(".fs"))) {
            // eslint-disable-next-line no-undef
            const path = `${process.cwd()}/${file}`;
            const req = FileReader_1.FileReader.read(file, path);
            if (!req)
                continue;
            if (Array.isArray(req))
                this.addPath(...req);
            else
                this.addPath(req);
        }
    }
    get(type, fn) {
        const cmds = this.commands.get(type) ?? [];
        if (!fn)
            return cmds;
        return cmds.filter(fn);
    }
    add(...commands) {
        for (let i = 0, len = commands.length; i < len; i++) {
            const req = commands[i];
            if (!req.type)
                continue;
            const cmd = req instanceof structures_1.BaseCommand ? req : new structures_1.BaseCommand(req);
            const col = this.commands.ensure(cmd.type, () => new Array());
            col.push(cmd);
        }
    }
    addPath(...commands) {
        for (let i = 0, len = commands.length; i < len; i++) {
            const req = commands[i];
            const cmd = req instanceof structures_1.BaseCommand ? req : new structures_1.BaseCommand(req);
            const col = this.commands.ensure(cmd.type, () => new Array());
            cmd.unloadable = true;
            col.push(cmd);
        }
    }
}
exports.BaseCommandManager = BaseCommandManager;
//# sourceMappingURL=BaseCommandManager.js.map