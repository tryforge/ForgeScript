"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$onlyForRoles",
    version: "1.1.0",
    description: "Only executes code if user has given roles",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to execute if user does not meet the roles",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "roles",
            pointer: 0,
            description: "The roles to check for",
            rest: true,
            required: true,
            type: structures_1.ArgType.Role
        }
    ],
    async execute(ctx) {
        const code = this.data.fields[0];
        let ok = false;
        if (ctx.guild) {
            const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1);
            if (!this["isValidReturnType"](rt))
                return rt;
            ok = ctx.member?.roles.cache.hasAny(...args[0].map(x => x.id)) ?? false;
        }
        if (!ok)
            return this["fail"](ctx, code);
        return this.success();
    },
});
//# sourceMappingURL=onlyForRoles.js.map