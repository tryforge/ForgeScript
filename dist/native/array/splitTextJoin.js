"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
const textSplit_1 = require("./textSplit");
exports.default = new structures_1.NativeFunction({
    name: "$splitTextJoin",
    version: "1.4.0",
    description: "Joins all elements from array with given separator",
    unwrap: true,
    aliases: ["$textSplitJoin"],
    output: (0, array_1.default)(),
    args: [
        {
            name: "separator",
            description: "The separator to use for every element",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [sep]) {
        const arr = ctx.getEnvironmentInstance(Array, textSplit_1.SplitTextName);
        return this.success(arr?.join(sep));
    },
});
//# sourceMappingURL=splitTextJoin.js.map