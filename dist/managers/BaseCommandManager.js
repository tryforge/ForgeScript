"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommandManager = void 0;
const discord_js_1 = require("discord.js");
const process_1 = require("process");
const core_1 = require("../core");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
const structures_1 = require("../structures");
const path_1 = require("path");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
class BaseCommandManager extends tiny_typed_emitter_1.TypedEmitter {
    client;
    commands = new discord_js_1.Collection();
    paths = new Array();
    constructor(client) {
        super();
        this.client = client;
    }
    refresh() {
        for (const [key, commands] of this.commands) {
            // Unload the ones added thru folders
            const unloadable = commands.filter((x) => !x.data.unloadable);
            // Keep unloadable
            this.commands.set(key, unloadable);
        }
        for (const p of this.paths) {
            for (const file of (0, recursiveReaddirSync_1.default)(p).filter((x) => x.endsWith(".js") || x.endsWith)) {
                // eslint-disable-next-line no-undef
                const path = (0, path_1.join)((0, process_1.cwd)(), file);
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
            const path = (0, path_1.join)((0, process_1.cwd)(), file);
            const req = core_1.FileReader.read(file, path);
            if (!req)
                continue;
            if (Array.isArray(req))
                this.addPath(true, path, ...req);
            else
                this.addPath(true, path, req);
        }
    }
    get count() {
        return this.commands.reduce((x, y) => x + y.length, 0);
    }
    get(type, fn) {
        const cmds = this.commands.get(type) ?? [];
        if (!fn)
            return cmds;
        return cmds.filter(fn);
    }
    add(...commands) {
        this.addPath(false, undefined, ...commands);
    }
    addPath(unloadable, path, ...commands) {
        for (let i = 0, len = commands.length; i < len; i++) {
            const req = commands[i];
            const cmd = req instanceof structures_1.BaseCommand ? req : new structures_1.BaseCommand({ ...req, path });
            if (path)
                cmd.setPath(path);
            cmd.validate();
            if (this.handlerName && !this.client.events.has(this.handlerName, cmd.type)) {
                structures_1.Logger.warn(`Command is using the following listener: ${cmd.type} but the client is not listening to it. (${cmd.data.path ?? "index file"})`);
            }
            const col = this.commands.ensure(cmd.type, () => new Array());
            cmd.data.unloadable = unloadable;
            col.push(cmd);
        }
        this.emit("update");
    }
    toArray() {
        return Array.from(this.commands.values()).flat();
    }
}
exports.BaseCommandManager = BaseCommandManager;
//# sourceMappingURL=BaseCommandManager.js.map