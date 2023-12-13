"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findEmoji",
    version: "1.0.0",
    description: "Finds a emoji",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or emoji name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [q]) {
        const parsed = (0, discord_js_1.parseEmoji)(q);
        if (structures_1.CompiledFunction.IdRegex.test(q)) {
            const e = ctx.client.emojis.cache.get(q);
            if (e)
                return this.success(e.id);
        }
        const name = parsed?.name.toLowerCase();
        return this.success(ctx.client.emojis.cache.find((x) => x.id === q || x.name?.toLowerCase() === name || x.toString() === q)?.id);
    },
});
//# sourceMappingURL=findEmoji.js.map