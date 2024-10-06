"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteApplicationEmoji",
    description: "Deletes an application emoji, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.ApplicationEmoji,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [emoji]) {
        return this.success(!!(await emoji.delete().catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteApplicationEmoji.js.map