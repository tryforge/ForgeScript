"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const activity_1 = require("../../properties/activity");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$memberActivity",
    version: "1.5.0",
    description: "Returns the activity of a member",
    aliases: [
        "$activity",
        "$userActivity",
        "$memberActivities"
    ],
    unwrap: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the member from",
            required: true,
            rest: false,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to return its activity",
            required: true,
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the activity to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: activity_1.ActivityProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: false,
    execute(ctx, [, member, prop, sep]) {
        const activity = (member ?? ctx.member)?.presence?.activities;
        return this.success((prop ? activity?.map((x) => activity_1.ActivityProperties[prop](x, sep)) : activity)?.join(sep ?? ", "));
    }
});
//# sourceMappingURL=memberActivity.js.map