"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const reaction_1 = require("../../properties/reaction");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getMessageReactions",
    version: "2.2.0",
    description: "Retrieves all reactions of a message",
    aliases: ["$getReactions"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to retrieve reactions from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property of the reactions to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: reaction_1.ReactionProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [, message, prop, sep]) {
        const reactions = (await (message ?? ctx.message)?.fetch().catch(ctx.noop))?.reactions.cache;
        return this.success(reactions?.map(reaction => reaction_1.ReactionProperties[prop || reaction_1.ReactionProperty.emoji](reaction, sep)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=getMessageReactions.js.map