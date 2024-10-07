"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteApplicationEmojis",
    version: "1.5.0",
    description: "Deletes application emojis, returns the count of emojis deleted",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emojis",
            description: "The emojis to delete",
            rest: true,
            required: true,
            type: structures_1.ArgType.ApplicationEmoji,
        },
    ],
    output: structures_1.ArgType.Number,
    async execute(ctx, [emojis]) {
        let count = 0;
        for (let i = 0, len = emojis.length; i < len; i++) {
            const emoji = emojis[i];
            const success = await emoji.delete().catch(ctx.noop);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteApplicationEmojis.js.map