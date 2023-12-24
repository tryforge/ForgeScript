"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const textSplit_1 = require("./textSplit");
exports.default = new structures_1.NativeFunction({
    name: "$splitText",
    version: "1.2.0",
    description: "Gets element of textSplit",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to get split at",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [index]) {
        return this.success(ctx.getEnvironmentInstance(Array, textSplit_1.SplitTextName)?.[index]);
    },
});
//# sourceMappingURL=splitText.js.map