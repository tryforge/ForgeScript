"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStatusType = void 0;
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
var CustomStatusType;
(function (CustomStatusType) {
    CustomStatusType["state"] = "state";
    CustomStatusType["emoji"] = "emoji";
})(CustomStatusType || (exports.CustomStatusType = CustomStatusType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$userCustomStatus",
    version: "1.5.0",
    aliases: ["$customStatus"],
    description: "Returns the custom status of a user",
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the user from",
            required: true,
            rest: false,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The user to return its custom status",
            required: true,
            rest: false,
            type: structures_1.ArgType.User,
        },
        {
            name: "type",
            description: "The type of the custom status to fetch",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: CustomStatusType
        },
    ],
    brackets: false,
    async execute(ctx, [, user, type]) {
        const member = await ctx.guild?.members.fetch(user ?? ctx.user?.id).catch(ctx.noop);
        const status = member?.presence?.activities?.find(x => x.type === discord_js_1.ActivityType.Custom);
        if (!type) {
            return this.success(status?.state);
        }
        else {
            return this.success(status?.[type]?.toString());
        }
    },
});
//# sourceMappingURL=userCustomStatus.js.map