"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$selectMenuValues",
    version: "1.0.0",
    description: "Returns select menu values",
    brackets: false,
    args: [
        {
            name: "index",
            description: "The index of the value",
            type: structures_1.ArgType.Number,
            rest: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            type: structures_1.ArgType.String,
            rest: false,
        },
    ],
    output: (0, array_1.default)(),
    unwrap: true,
    execute(ctx, [index, sep]) {
        if (!ctx.isSelectMenu())
            return this.success();
        const values = ctx.interaction.values;
        return this.success(typeof (index) === "number" ? values[index] : values.join(sep ?? ", "));
    },
});
//# sourceMappingURL=selectMenuValues.js.map