"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$dmChannelID",
    version: "1.0.0",
    description: "Returns the dm channel id of a user",
    brackets: false,
    output: structures_1.ArgType.Channel,
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
        const dm = await user?.createDM().catch(ctx.noop);
        return this.success(dm ? dm.id : undefined);
    },
});
//# sourceMappingURL=dmChannelID.js.map