"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$attachment",
    version: "1.0.0",
    description: "Adds an attachment to the response",
    aliases: ["$addAttachment"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The attachment url or path to file",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "name",
            description: "The name for this attachment, with the extension",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "as text",
            description: "Whether to use url param as text",
            rest: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "encoding",
            description: "Encoding to use for text, utf-8 default",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "description",
            description: "The description for this attachment",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "title",
            description: "The title for this attachment",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [url, name, asText, enc, desc, title]) {
        const attachment = new discord_js_1.AttachmentBuilder(asText ? Buffer.from(url, enc ?? "utf-8") : url, {
            name,
            title: title || undefined,
            description: desc || undefined
        });
        ctx.container.files.push(attachment);
        return this.success();
    },
});
//# sourceMappingURL=attachment.js.map