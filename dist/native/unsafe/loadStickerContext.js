"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadStickerContext",
    version: "1.4.0",
    aliases: [
        "$useStickerContext",
        "$asStickerContext"
    ],
    brackets: true,
    description: "Loads a sticker instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    execute(ctx, [s]) {
        ctx.obj = s;
        return this.success();
    },
});
//# sourceMappingURL=loadStickerContext.js.map