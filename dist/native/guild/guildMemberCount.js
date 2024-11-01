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
    PresenceStatus["invisible"] = "invisible";
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
    execute(ctx, [guild, status, bots]) {
        guild ??= ctx.guild;
        bots ??= true;
        if (status) {
            return this.success(guild?.members.cache.filter(member => member.presence?.status === status && (bots ? true : !member.user.bot)).size);
        }
        return this.success(bots ? guild?.memberCount : guild?.members.cache.filter(member => !member.user.bot).size);
    },
});
//# sourceMappingURL=guildMemberCount.js.map