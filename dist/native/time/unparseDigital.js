"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const digital_1 = require("../../functions/digital");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unparseDigital",
    version: "1.5.0",
    description: "Unparses given digital format to ms",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "digital",
            description: "The digital format to convert to ms",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [digital]) {
        return this.success((0, digital_1.unparseDigital)(digital));
    },
});
//# sourceMappingURL=unparseDigital.js.map