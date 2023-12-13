"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$inviteExists",
    version: "1.0.0",
    description: "Returns whether an invite code exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(!!(await ctx.client.fetchInvite(id).catch(noop_1.default)));
    },
});
//# sourceMappingURL=inviteExists.js.map