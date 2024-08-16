"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildMemberCount",
    version: "1.0.0",
    description: "Returns the user count of a guild",
    brackets: false,
    aliases: [
        "$serverMemberCount",
        "$serverMembersCount"
    ],
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve member count from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "presence",
            description: "The presence of the users to count",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    unwrap: true,
    execute(ctx, [guild, presence]) {
        guild ??= ctx.guild;
        const status = presence?.toLowerCase();
        if (!status || status === "all") {
            return this.success(guild?.memberCount);
        }
        else {
            return this.success(guild?.members.cache.filter(member => member.presence?.status === status).size);
        }
    },
});
//# sourceMappingURL=guildMemberCount.js.map