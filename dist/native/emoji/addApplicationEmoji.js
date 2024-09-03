"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addApplicationEmoji",
    version: "1.5.0",
    description: "Adds an application emoji, returns the emoji id",
    brackets: true,
    unwrap: true,
    args: [
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
    ],
    output: structures_1.ArgType.ApplicationEmoji,
    async execute(ctx, [name, icon, returnEmojiID]) {
        returnEmojiID ??= true;
        const emoji = await ctx.client.application.emojis.create({
            name: name,
            attachment: icon
        }).catch(ctx.noop);
        return this.success(returnEmojiID && emoji ? emoji.id : undefined);
    },
});
//# sourceMappingURL=addApplicationEmoji.js.map