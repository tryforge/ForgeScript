"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleMembers",
    version: "1.0.0",
    description: "Returns the role member ids",
    brackets: false,
    unwrap: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild id to return the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role id return its members",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use for each member",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, role, sep]) {
        return this.success((role ?? ctx.role)?.members.map((x) => x.id).join(sep || ", "));
    },
});
//# sourceMappingURL=roleMembers.js.map