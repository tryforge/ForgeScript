"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
function digital(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const HH = String(hours).padStart(2, "0");
    const MM = String(minutes).padStart(2, "0");
    const SS = String(seconds).padStart(2, "0");
    return `${HH}:${MM}:${SS}`;
}
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
        return this.success(digital(ms));
    },
});
//# sourceMappingURL=parseDigital.js.map