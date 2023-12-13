"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$nickname",
    version: "1.0.0",
    description: "Returns the member nickname",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guildID",
            description: "The guild id to return the member from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The member id return its nick",
            rest: false,
            type: structures_1.ArgType.Member,
            pointer: 0,
            required: true,
        },
    ],
    execute(ctx, [, member]) {
        return this.success((member ?? ctx.member)?.displayName);
    },
});
//# sourceMappingURL=nickname.js.map