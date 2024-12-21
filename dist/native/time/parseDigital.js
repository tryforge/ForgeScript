"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const digital_1 = require("../../functions/digital");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseDigital",
    version: "1.5.0",
    description: "Parses given ms to digital format",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "ms",
            description: "The ms to convert to digital format",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [ms]) {
        return this.success((0, digital_1.parseDigital)(ms));
    },
});
//# sourceMappingURL=parseDigital.js.map