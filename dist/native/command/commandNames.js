"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$commandNames",
    version: "1.0.6",
    description: "Return commands with given type",
    brackets: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "type",
            description: "The command type to pull names from",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for every name",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [type, sep]) {
        return this.success(ctx.client.commands
            .get(type)
            .map((x) => x.name)
            .filter(Boolean)
            .join(sep || ", "));
    },
});
//# sourceMappingURL=commandNames.js.map