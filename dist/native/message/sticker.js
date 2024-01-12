"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$sticker",
    version: "1.3.0",
    description: "Attach a sticker to the response",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker,
            description: "The sticker to use"
        }
    ],
    execute(ctx, [sticker]) {
        ctx.container.stickers.push(sticker.id);
        return this.success();
    },
});
//# sourceMappingURL=sticker.js.map