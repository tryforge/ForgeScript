"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberRawData",
    version: "1.5.0",
    description: "Returns the raw data of a member",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to get raw data from",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    output: structures_1.ArgType.Json,
    execute(ctx, [, member]) {
        return this.successJSON((member ?? ctx.member)?.toJSON());
    },
});
//# sourceMappingURL=memberRawData.js.map