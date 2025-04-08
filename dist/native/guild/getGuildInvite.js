"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const invite_1 = require("../../properties/invite");
exports.default = new structures_1.NativeFunction({
    name: "$getGuildInvite",
    version: "2.2.0",
    description: "Returns information about a guild invite",
    brackets: true,
    unwrap: true,
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to fetch invite from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "property",
            description: "The property of the invite to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: invite_1.InviteProperty
        },
    ],
    async execute(ctx, [guild, code, prop]) {
        const invite = await guild.invites.fetch(code).catch(ctx.noop);
        if (prop && invite)
            return this.success(invite_1.InviteProperties[prop](invite));
        return this.successJSON(invite);
    },
});
//# sourceMappingURL=getGuildInvite.js.map