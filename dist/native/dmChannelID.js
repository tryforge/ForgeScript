"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$dmChannelID",
    version: "1.0.0",
    description: "Returns the dm channel id of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "User to get the dm channel",
            rest: false,
            required: true,
            type: structures_1.ArgType.User,
        },
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user;
        const dm = await user?.createDM().catch(noop_1.default);
        return this.success(dm ? dm.id : undefined);
    },
});
//# sourceMappingURL=dmChannelID.js.map