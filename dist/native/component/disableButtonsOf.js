"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableButtonsOf",
    version: "2.2.0",
    description: "Disables all buttons of a message, returns bool",
    aliases: ["$disableAllButtonsOf"],
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to disable buttons on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The index of the row to disable",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, msg, index]) {
        const components = msg.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        for (let i = 0, len = components.length; i < len; i++) {
            if (Number.isFinite(index) && i !== index)
                continue;
            const actionRow = new discord_js_1.ActionRowBuilder();
            components[i]?.components.forEach(comp => {
                if (comp instanceof discord_js_1.ButtonBuilder) {
                    actionRow.addComponents(comp.setDisabled(true));
                }
                else {
                    actionRow.addComponents(comp);
                }
            });
            if (i === index)
                break;
        }
        return this.success(!!(await msg.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=disableButtonsOf.js.map