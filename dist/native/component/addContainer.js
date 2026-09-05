"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Adds a new container component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "color",
            description: "The color to set",
            rest: false,
            type: structures_1.ArgType.Color,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx) {
        (0, components_1.addActionRow)(ctx);
        ctx.container.components.push(new discord_js_1.ContainerBuilder());
        ctx.container.inside.push(discord_js_1.ComponentType.Container);
        const comp = ctx.container.components.at(-1);
        const code = this.data.fields[0];
        const resolved = await this["resolveCode"](ctx, code);
        if (!this["isValidReturnType"](resolved))
            return resolved;
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1, 2);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [color, spoiler] = args;
        comp.setAccentColor(color || undefined);
        comp.setSpoiler(spoiler || false);
        (0, components_1.addActionRow)(ctx);
        ctx.container.inside.pop();
        return this.success();
    },
});
//# sourceMappingURL=addContainer.js.map