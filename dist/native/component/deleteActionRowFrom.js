"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$deleteActionRowFrom",
    version: "1.5.0",
    description: "Deletes an action row at given index",
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
            description: "The message to remove row from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        },
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number,
        },
    ],
    output: structures_1.ArgType.Boolean,
    unwrap: true,
    async execute(ctx, [, m, index]) {
        const components = m.components.map(x => discord_js_1.ActionRowBuilder.from(x));
        components.splice(index, 1);
        return this.success(!!(await m.edit({ components: components }).catch(lodash_1.noop)));
    },
});
//# sourceMappingURL=deleteActionRowFrom.js.map