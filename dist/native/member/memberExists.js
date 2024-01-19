"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$memberExists",
    version: "1.0.0",
    description: "Returns whether an member id exists",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the member",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "member ID",
            description: "The member to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && !!(await guild.members.fetch(id).catch(ctx.noop)));
    },
});
//# sourceMappingURL=memberExists.js.map