"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionType = void 0;
const structures_1 = require("../../structures");
var ReactionType;
(function (ReactionType) {
    ReactionType["normal"] = "normal";
    ReactionType["burst"] = "burst";
})(ReactionType || (exports.ReactionType = ReactionType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$getMessageReactionCount",
    version: "1.0.0",
    description: "Gets the amount of users that have reacted to a specific emoji",
    unwrap: true,
    output: structures_1.ArgType.Number,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get emoji count from",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "emoji",
            description: "The emoji to get its user count",
            required: true,
            pointer: 1,
            rest: false,
            type: structures_1.ArgType.Reaction,
        },
        {
            name: "type",
            description: "The type of the reaction to count users for",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: ReactionType
        },
    ],
    execute(ctx, [, , reaction, type]) {
        return this.success(type ? reaction?.countDetails?.[type] : reaction?.count);
    },
});
//# sourceMappingURL=getMessageReactionCount.js.map