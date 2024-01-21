"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandCount",
    version: "1.4.0",
    aliases: ["$slashCommandCount"],
    description: "Returns the amount of application commands registered by this bot",
    output: structures_1.ArgType.Number,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get application command count from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    async execute(ctx, [g]) {
        if (!this.hasFields) {
            return this.success(await ctx.client.application.commands
                .fetch()
                .then((x) => x.size)
                .catch(ctx.noop));
        }
        return this.success(await g.commands
            .fetch()
            .then((x) => x.size)
            .catch(ctx.noop));
    },
});
//# sourceMappingURL=applicationCommandCount.js.map