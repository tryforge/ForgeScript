"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresenceStatus = void 0;
const structures_1 = require("../../structures");
var PresenceStatus;
(function (PresenceStatus) {
    PresenceStatus["online"] = "online";
    PresenceStatus["idle"] = "idle";
    PresenceStatus["dnd"] = "dnd";
    PresenceStatus["offline"] = "offline";
})(PresenceStatus || (exports.PresenceStatus = PresenceStatus = {}));
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
            type: structures_1.ArgType.Enum,
            enum: PresenceStatus
        },
        {
            name: "count bots",
            description: "Whether to count bots",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [guild, presence, bots]) {
        guild ??= ctx.guild;
        bots ??= true;
        if (presence) {
            return this.success(guild?.members.cache.filter(member => {
                const status = member.presence?.status;
                return (presence === PresenceStatus.offline ? status === "offline" || !status : status === presence) && (bots || !member.user.bot);
            }).size);
        }
        return this.success(bots ? guild?.memberCount : guild?.members.cache.filter(member => !member.user.bot).size);
    },
});
//# sourceMappingURL=guildMemberCount.js.map