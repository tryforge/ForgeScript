"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$attachment",
    version: "1.0.0",
    brackets: true,
    description: "Adds an attachment to the response",
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The attachment url or path to file",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "name",
            description: "the name for this attachment, with the extension",
            rest: false,
            type: structures_1.ArgType.String,
            required: true
        }
    ],
    execute(ctx, [url, name]) {
        const attachment = new discord_js_1.AttachmentBuilder(url, {
            name
        });
        ctx.container.files.push(attachment);
        return structures_1.Return.success();
    },
});
//# sourceMappingURL=attachment.js.map