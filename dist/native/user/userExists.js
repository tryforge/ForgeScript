"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userExists",
    version: "1.0.0",
    description: "Returns whether a user id exists",
    unwrap: true,
    output: structures_1.ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && !!(await ctx.client.users.fetch(id).catch(ctx.noop)));
    },
});
//# sourceMappingURL=userExists.js.map