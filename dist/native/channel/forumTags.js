"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const forumTag_1 = require("../../properties/forumTag");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$forumTags",
    version: "1.5.0",
    description: "Returns all available tags of a forum",
    unwrap: true,
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    args: [
        {
            name: "channel ID",
            description: "The channel to get tags of",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildForum,
            required: true
        },
        {
            name: "property",
            description: "The property to return for every tag",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: forumTag_1.ForumTagProperty
        },
        {
            name: "separator",
            description: "The separator to use for every tag property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [ch, prop, sep]) {
        const channel = ch;
        const tags = channel?.availableTags;
        return this.successJSON(!prop ? tags : tags?.map(tag => forumTag_1.ForumTagProperties[prop](tag)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=forumTags.js.map