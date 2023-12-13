"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMentionCharRegex = void 0;
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.UserMentionCharRegex = /[<>@]/g;
exports.default = new structures_1.NativeFunction({
    name: "$findUser",
    version: "1.0.0",
    description: "Finds a user",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or user name to find",
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
    async execute(ctx, [q, rt]) {
        const id = q.replace(exports.UserMentionCharRegex, "");
        if (structures_1.CompiledFunction.IdRegex.test(id)) {
            const u = await ctx.client.users.fetch(id).catch(noop_1.default);
            if (u)
                return this.success(u.id);
        }
        q = q.toLowerCase();
        return this.success(ctx.client.users.cache.find((x) => x.id === id || x.username?.toLowerCase() === q)?.id ??
            (rt ? ctx.user?.id : undefined));
    },
});
//# sourceMappingURL=findUser.js.map