"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerOwnerID",
    version: "1.4.0",
    description: "Returns the user who added the sticker",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "sticker ID",
            description: "The sticker to pull owner of",
            rest: false,
            required: true,
            type: structures_1.ArgType.Sticker
        }
    ],
    output: structures_1.ArgType.User,
    async execute(ctx, [s]) {
        s ??= ctx.sticker;
        return this.success(await s?.fetchUser().then(x => x?.id).catch(ctx.noop));
    },
});
//# sourceMappingURL=stickerOwnerID.js.map