"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableComponentsOf",
    version: "2.2.0",
    description: "Enables all components of a message, returns bool",
    aliases: ["$enableAllComponentsOf"],
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
            description: "The message to enable components on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
    ],
    brackets: true,
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, msg]) {
        const components = msg.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        components.forEach(row => {
            const actionRow = new discord_js_1.ActionRowBuilder();
            row?.components.forEach(comp => actionRow.addComponents(comp.setDisabled(false)));
        });
        return this.success(!!(await msg.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=enableComponentsOf.js.map