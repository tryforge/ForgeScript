"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableButtons",
    version: "2.2.0",
    description: "Enables all buttons on the current message",
    aliases: ["$enableAllButtons"],
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the row to enable",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: false,
    execute(ctx, [index]) {
        const data = ctx.container.components;
        const components = Number.isFinite(index) ? [data[index]] : data;
        components.forEach(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(component => {
                if (component instanceof discord_js_1.ButtonBuilder) {
                    actionRow.addComponents(component.setDisabled(false));
                }
                else {
                    actionRow.addComponents(component);
                }
            });
        });
        return this.success();
    },
});
//# sourceMappingURL=enableButtons.js.map