"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$messageAttachmentFlags",
    version: "1.5.0",
    description: "Returns the flags of an attachment from this message",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to pull message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            pointer: 0,
            description: "The message to get its attachment flags",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
        },
        {
            name: "index",
            rest: false,
            description: "The index of the attachment",
            type: structures_1.ArgType.Number,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use for every flag",
            type: structures_1.ArgType.String,
            required: false,
            rest: false,
        },
    ],
    output: (0, array_1.default)(discord_js_1.AttachmentFlags),
    execute(ctx, [, message, index, sep]) {
        return this.success((message ?? ctx.message)?.attachments.at(index ?? 0)?.flags?.toArray().join(sep ?? ", "));
    },
});
//# sourceMappingURL=messageAttachmentFlags.js.map