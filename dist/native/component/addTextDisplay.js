"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const buildActionRow_1 = require("../../functions/buildActionRow");
exports.default = new structures_1.NativeFunction({
    name: "$addTextDisplay",
    description: "Adds a new text display component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "content",
            description: "The content of this text display",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [content]) {
        (0, buildActionRow_1.buildActionRow)(ctx);
        const comp = ctx.container.components.at(-1);
        const text = new discord_js_1.TextDisplayBuilder().setContent(content);
        if (ctx.container.isInside(discord_js_1.ComponentType.Section))
            ctx.component.section?.addTextDisplayComponents(text);
        else if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
            comp.addTextDisplayComponents(text);
        else
            ctx.container.components.push(text);
        return this.success();
    },
});
//# sourceMappingURL=addTextDisplay.js.map