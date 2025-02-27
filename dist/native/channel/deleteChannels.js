"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteChannels",
    version: "1.0.5",
    description: "Deletes given channels, returns the count of channels deleted",
    aliases: ["$deleteChannel"],
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "channels",
            description: "The channels to delete",
            rest: true,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "delete" in i,
        },
    ],
    async execute(ctx, [channels]) {
        let count = 0;
        for (let i = 0, len = channels.length; i < len; i++) {
            const ch = channels[i];
            const success = await ch.delete().catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteChannels.js.map