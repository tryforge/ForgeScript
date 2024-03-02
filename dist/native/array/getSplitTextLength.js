"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const textSplit_1 = require("./textSplit");
exports.default = new structures_1.NativeFunction({
    name: "$getSplitTextLength",
    version: "1.4.0",
    description: "Gets count of elements from $textSplit",
    aliases: [
        "$getTextSplitLength"
    ],
    output: structures_1.ArgType.String,
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.getEnvironmentInstance(Array, textSplit_1.SplitTextName)?.length);
    },
});
//# sourceMappingURL=getSplitTextLength.js.map