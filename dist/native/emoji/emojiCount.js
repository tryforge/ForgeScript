"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmojiType = void 0;
const structures_1 = require("../../structures");
var EmojiType;
(function (EmojiType) {
    EmojiType["normal"] = "normal";
    EmojiType["animated"] = "animated";
})(EmojiType || (exports.EmojiType = EmojiType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$emojiCount",
    version: "1.0.0",
    description: "Returns the emoji count of all servers",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "type",
            description: "The type of the emotes to count",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: EmojiType
        },
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [type]) {
        const emojis = ctx.client.emojis.cache;
        return this.success(!type ? emojis.size : emojis.filter(emoji => type === EmojiType.normal
            ? !emoji.animated
            : type === EmojiType.animated
                ? emoji.animated
                : true).size);
    },
});
//# sourceMappingURL=emojiCount.js.map