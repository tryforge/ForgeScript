"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteComponentFrom",
    version: "1.5.0",
    description: "Deletes a component with given custom id from a message",
    brackets: true,
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
            description: "The message to remove component from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "custom ID",
            description: "The component's custom id to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    unwrap: true,
    async execute(ctx, [, m, id]) {
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        for (let i = 0, len = components.length; i < len; i++) {
            const comp = components[i];
            const index = comp.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === id);
            if (index !== -1) {
                if (comp.components.length === 1)
                    components.splice(i, 1);
                else
                    comp.components.splice(index, 1);
                break;
            }
        }
        return this.success(!!(await m.edit({ components: components }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteComponentFrom.js.map