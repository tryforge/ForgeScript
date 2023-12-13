"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleExists",
    version: "1.0.0",
    description: "Returns whether an role id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the role",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && guild.roles.cache.has(id));
    },
});
//# sourceMappingURL=roleExists.js.map