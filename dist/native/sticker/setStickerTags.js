"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setStickerTags",
    version: "1.4.0",
    description: "Sets a sticker's tags",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        },
        {
            name: "tags",
            description: "The new tags for the sticker",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [s, n]) {
        return this.success(!!(await s.edit({
            tags: n.join(" ")
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setStickerTags.js.map