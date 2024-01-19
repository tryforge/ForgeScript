"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildVanityCode",
    version: "1.0.0",
    description: "Returns the guilds vanity code",
    unwrap: true,
    aliases: [
        "$serverVanityCode"
    ],
    output: structures_1.ArgType.Invite,
    args: [
        {
            name: "guild ID",
            description: "The guild to return its vanity code",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
    ],
    brackets: false,
    async execute(ctx, [guild]) {
        guild ??= ctx.guild;
        const vanity = await guild?.fetchVanityData().catch(ctx.noop);
        return this.success(vanity ? vanity.code : undefined);
    },
});
//# sourceMappingURL=guildVanityCode.js.map