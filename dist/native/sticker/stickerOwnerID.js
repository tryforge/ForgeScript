"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
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
        return this.success(await s?.fetchUser().then(x => x?.id).catch(noop_1.default));
    },
});
//# sourceMappingURL=stickerOwnerID.js.map