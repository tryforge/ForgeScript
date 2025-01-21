"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findApplicationEmoji",
    version: "2.2.0",
    description: "Finds an application emoji of the client",
    brackets: true,
    output: structures_1.ArgType.ApplicationEmoji,
    args: [
        {
            name: "query",
            description: "The id, format or emoji name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    async execute(ctx, [q]) {
        if (structures_1.CompiledFunction.IdRegex.test(q)) {
            const e = await ctx.client.application.emojis.fetch(q).catch(ctx.noop);
            if (e)
                return this.success(e.id);
        }
        return this.success((await ctx.client.application.emojis.fetch().catch(ctx.noop))?.find((x) => x.id === q || x.name?.toLowerCase() === q.toLowerCase() || x.toString() === q)?.id);
    },
});
//# sourceMappingURL=findApplicationEmoji.js.map