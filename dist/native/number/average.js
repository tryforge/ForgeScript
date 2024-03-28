"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$average",
    version: "1.5.0",
    brackets: true,
    unwrap: true,
    description: "Calculates the average of given numbers",
    args: [
        {
            name: "separator",
            description: "The delimiter of each value",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "values",
            description: "Values separated by `separator`",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [sep, values]) {
        const n = values.split(sep).map(Number);
        return this.success(n.reduce((x, y) => x + y, 0) / n.length);
    },
});
//# sourceMappingURL=average.js.map