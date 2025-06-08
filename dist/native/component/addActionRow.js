"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addActionRow",
    version: "1.0.0",
    description: "Adds an action row",
    unwrap: true,
    execute(ctx) {
        const row = ctx.container.actionRow;
        const comp = ctx.container.components.at(-1);
        if (row) {
            if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
                comp.addActionRowComponents(row);
            else
                ctx.container.components.push(row);
        }
        ctx.container.actionRow = new discord_js_1.ActionRowBuilder();
        return this.success();
    },
});
//# sourceMappingURL=addActionRow.js.map