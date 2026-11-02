"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTypeRegex = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.FileTypeRegex = /^(audio|image|video|\..+)$/;
exports.default = new structures_1.NativeFunction({
    name: "$addFileType",
    aliases: ["$addFileTypes"],
    description: "Adds allowed file types to the last file upload",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "types",
            description: "The file types to add, e.g. audio, image, video, .pdf",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
            check: (x) => exports.FileTypeRegex.test(x),
        },
    ],
    execute(ctx, [types]) {
        const upload = (0, components_1.getLastComponent)(ctx);
        if (upload instanceof discord_js_1.FileUploadBuilder)
            upload.addFileTypes(types);
        return this.success();
    },
});
//# sourceMappingURL=addFileType.js.map