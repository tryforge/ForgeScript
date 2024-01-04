"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildNames",
    version: "1.0.0",
    description: "Returns the server names of the bot",
    brackets: false,
    aliases: [
        "$serverNames"
    ],
    output: (0, array_1.default)(),
    args: [
        {
            name: "separator",
            description: "The separator to use for each guild",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [sep]) {
        return this.success(ctx.client.guilds.cache.map((x) => x.name).join(sep || ", "));
    },
});
//# sourceMappingURL=guildNames.js.map