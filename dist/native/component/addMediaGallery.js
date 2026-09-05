"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
const discord_js_1 = require("discord.js");
exports.default = new structures_1.NativeFunction({
    name: "$addMediaGallery",
    version: "2.4.0",
    description: "Adds a new media gallery component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "items",
            description: "The media items to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx) {
        (0, components_1.addActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        ctx.component.gallery = new discord_js_1.MediaGalleryBuilder();
        const code = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, code);
        if (!this["isValidReturnType"](resolved))
            return resolved;
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addMediaGalleryComponents(ctx.component.gallery);
        else
            ctx.container.components.push(ctx.component.gallery);
        delete ctx.component.gallery;
        return this.success();
    },
});
//# sourceMappingURL=addMediaGallery.js.map