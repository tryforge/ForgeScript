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
    name: "$memberCustomStatus",
    version: "1.5.0",
    aliases: [
        "$customStatus",
        "$userCustomStatus"
    ],
    description: "Returns the custom status of a member",
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
            type: structures_1.ArgType.Member,
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
    async execute(ctx, [, member, type]) {
        const status = (member ?? ctx.member)?.presence?.activities?.find(x => x.type === discord_js_1.ActivityType.Custom);
        return this.success(type ? status?.[type]?.toString() : status?.state);
    }
});
//# sourceMappingURL=memberCustomStatus.js.map