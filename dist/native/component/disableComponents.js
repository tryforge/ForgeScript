"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableComponents",
    version: "2.2.0",
    description: "Disables all components on the current message",
    aliases: ["$disableAllComponents"],
    unwrap: false,
    execute(ctx) {
        const components = ctx.container.components;
        components.forEach(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(component => actionRow.addComponents(component.setDisabled(true)));
        });
        return this.success();
    },
});
//# sourceMappingURL=disableComponents.js.map