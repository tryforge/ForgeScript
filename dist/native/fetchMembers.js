"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchMembers",
    version: "1.0.0",
    description: "Caches all members of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to cache members of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    async execute(ctx, [guild]) {
        guild ??= ctx.guild;
        await guild?.members.fetch();
        return this.success();
    },
});
//# sourceMappingURL=fetchMembers.js.map