"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const componentBuilders_1 = require("../../functions/componentBuilders");
exports.default = new structures_1.NativeFunction({
    name: "$addSeparator",
    version: "2.4.0",
    description: "Adds a new separator component",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "spacing",
            description: "The spacing of this separator",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.SeparatorSpacingSize
        },
        {
            name: "divider",
            description: "Whether to show a divider line",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    execute(ctx, [spacing, divider]) {
        (0, componentBuilders_1.addActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        const sep = new discord_js_1.SeparatorBuilder();
        if (spacing)
            sep.setSpacing(spacing);
        if (divider === false)
            sep.setDivider(false);
        if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addSeparatorComponents(sep);
        else
            ctx.container.components.push(sep);
        return this.success();
    },
});
//# sourceMappingURL=addSeparator.js.map