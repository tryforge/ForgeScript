"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$messageFlags",
    version: "1.5.0",
    description: "Returns the flags of a message",
    brackets: false,
    unwrap: true,
    output: (0, array_1.default)(discord_js_1.MessageFlags),
    args: [
        {
            name: "channel ID",
            description: "The channel to get the message from",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
        },
        {
            name: "message ID",
            description: "The message to return its flags",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: structures_1.ArgType.String,
            required: false,
            rest: false,
        },
    ],
    execute(ctx, [, msg, sep]) {
        return this.success((msg ?? ctx.message)?.flags.toArray().join(sep || ", "));
    },
});
//# sourceMappingURL=messageFlags.js.map