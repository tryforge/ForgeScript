"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setStickerName",
    version: "1.4.0",
    description: "Sets a sticker's name",
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
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [s, n]) {
        return this.success(!!(await s.edit({
            name: n
        }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setStickerName.js.map