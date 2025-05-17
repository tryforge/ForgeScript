"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const teamMember_1 = require("../../properties/teamMember");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$botTeamMembers",
    version: "2.4.0",
    description: "Returns the client's team members",
    aliases: [
        "$clientTeamMembers"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property of each team member to return",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: teamMember_1.TeamMemberProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [prop, sep]) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(ctx.noop);
        const owner = ctx.client.application.owner;
        return this.success(owner instanceof discord_js_1.Team ? owner.members.map(x => teamMember_1.TeamMemberProperties[prop || teamMember_1.TeamMemberProperty.id](x)).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=botTeamMembers.js.map