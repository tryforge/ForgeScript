"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editSticker",
    version: "1.4.0",
    description: "Edits a sticker's data",
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
            name: "name",
            description: "The new name for the sticker",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "description",
            description: "The new description for the sticker",
            rest: false,
            type: structures_1.ArgType.String
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
    async execute(ctx, [s, name, desc, tags]) {
        return this.success(!!(await s.edit({
            name: name || undefined,
            description: desc || undefined,
            tags: tags.join(" ") || undefined
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editSticker.js.map