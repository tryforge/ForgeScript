"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editApplicationEmoji",
    version: "1.5.0",
    description: "Edits an application emoji, returns bool",
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
        {
            name: "name",
            description: "The new name for the emoji",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [emoji, name]) {
        return this.success(!!(await emoji.edit({ name: name }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editApplicationEmoji.js.map