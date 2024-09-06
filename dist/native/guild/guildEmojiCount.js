"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const emojiCount_1 = require("../emoji/emojiCount");
exports.default = new structures_1.NativeFunction({
    name: "$guildEmojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of a guild",
    brackets: false,
    aliases: [
        "$serverEmojiCount"
    ],
    output: structures_1.ArgType.Number,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get emotes from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "type",
            description: "The type of the emotes to count",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: emojiCount_1.EmojiType
        },
    ],
    execute(ctx, [guild, type]) {
        guild ??= ctx.guild;
        const emojis = guild.emojis.cache;
        return this.success(!type ? emojis.size : emojis.filter(emoji => type === emojiCount_1.EmojiType.normal
            ? !emoji.animated
            : type === emojiCount_1.EmojiType.animated
                ? emoji.animated
                : true).size);
    },
});
//# sourceMappingURL=guildEmojiCount.js.map