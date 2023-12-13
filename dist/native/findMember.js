"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberMentionCharRegex = void 0;
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.MemberMentionCharRegex = /[<>@!]/g;
exports.default = new structures_1.NativeFunction({
    name: "$findMember",
    version: "1.0.0",
    description: "Finds a member of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the member on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "return author",
            description: "Returns the current author id if none found",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    async execute(ctx, [guild, q, rt]) {
        const id = q.replace(exports.MemberMentionCharRegex, "");
        if (structures_1.CompiledFunction.IdRegex.test(id)) {
            const m = await guild.members.fetch(id).catch(noop_1.default);
            if (m)
                this.success(m.id);
        }
        q = q.toLowerCase();
        const query = await guild.members
            .search({
            query: q,
        })
            .catch(noop_1.default);
        return this.success(query && query.size ? query.at(0)?.id : rt ? ctx.user?.id : undefined);
    },
});
//# sourceMappingURL=findMember.js.map