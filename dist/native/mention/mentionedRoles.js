"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mentionedRoles",
    aliases: [
        "$mentionedRole"
    ],
    output: (0, array_1.default)(),
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned roles",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the role",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [i]) {
        return this.success(this.hasFields
            ? ctx.message?.mentions.roles.at(i)?.id
            : ctx.message?.mentions.roles.map((x) => x.id).join(", "));
    },
});
//# sourceMappingURL=mentionedRoles.js.map