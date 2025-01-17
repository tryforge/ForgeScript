"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableComponents",
    version: "2.2.0",
    description: "Enables all components on the current message",
    aliases: ["$enableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components;
        components.forEach(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(component => actionRow.addComponents(component.setDisabled(false)));
        });
        return this.success();
    },
});
//# sourceMappingURL=enableComponents.js.map