"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommandManager = void 0;
const discord_js_1 = require("discord.js");
const ApplicationCommand_1 = require("../structures/ApplicationCommand");
const recursiveReaddirSync_1 = __importDefault(require("../functions/recursiveReaddirSync"));
class ApplicationCommandManager {
    client;
    commands = new discord_js_1.Collection();
    constructor(client) {
        this.client = client;
    }
    load(path) {
        for (const file of (0, recursiveReaddirSync_1.default)(path).filter(x => x.endsWith(".js"))) {
            // eslint-disable-next-line no-undef
            const req = this.loadOne(`${process.cwd()}/${file}`);
            if (!req)
                continue;
            this.add(req);
        }
    }
    get(input) {
        return this.commands.get(input.commandName) ?? null;
    }
    add(...values) {
        for (const value of values) {
            if (Array.isArray(value))
                return this.add(...value);
            const resolved = this.resolve(value);
            this.commands.set(resolved.name, resolved);
        }
    }
    loadOne(reqPath) {
        const req = require(reqPath);
        let value = req.default ?? req;
        if (!value || !Object.keys(value).length)
            return null;
        else if (Array.isArray(value))
            return value.map(this.resolve.bind(this));
        return this.resolve(value);
    }
    resolve(value) {
        return value instanceof ApplicationCommand_1.ApplicationCommand ? value : new ApplicationCommand_1.ApplicationCommand(value);
    }
    register() {
        return this.client.application.commands.set(this.commands.map(x => x.options.data));
    }
}
exports.ApplicationCommandManager = ApplicationCommandManager;
//# sourceMappingURL=ApplicationCommandManager.js.map