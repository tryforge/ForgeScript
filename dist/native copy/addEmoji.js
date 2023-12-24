"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addEmoji",
    version: "1.0.7",
    description: "Adds an emoji to a guild, returns the emoji id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add this emote to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the emoji",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "url",
            description: "The emoji icon to use",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "return emoji ID",
            description: "Whether to return the emoji id",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "roles",
            description: "The roles to limit usage of this emote",
            rest: true,
            required: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(_, [guild, name, icon, returnEmojiID, roles]) {
        const em = await guild.emojis
            .create({
            attachment: icon,
            name,
            roles: roles || undefined,
        })
            .catch(lodash_1.noop);
        return this.success(returnEmojiID && em ? em.id : undefined);
    },
});
//# sourceMappingURL=addEmoji.js.map