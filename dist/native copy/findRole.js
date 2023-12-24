"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMentionCharRegex = void 0;
const structures_1 = require("../structures");
exports.RoleMentionCharRegex = /[@<>&]/g;
exports.default = new structures_1.NativeFunction({
    name: "$findRole",
    version: "1.0.0",
    description: "Finds a role of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the role on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [guild, q]) {
        const id = q.replace(exports.RoleMentionCharRegex, "");
        if (structures_1.CompiledFunction.IdRegex.test(id)) {
            const r = guild.roles.cache.get(id);
            if (r)
                return this.success(r.id);
        }
        q = q.toLowerCase();
        return this.success(guild.roles.cache.find((x) => x.id === id || x.name.toLowerCase() === q)?.id);
    },
});
//# sourceMappingURL=findRole.js.map