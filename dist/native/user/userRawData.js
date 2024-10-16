"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userRawData",
    version: "1.5.0",
    description: "Returns the raw data of a user",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to get raw data from",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [user]) {
        return this.successJSON((user ?? ctx.user)?.toJSON());
    },
});
//# sourceMappingURL=userRawData.js.map