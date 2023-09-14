"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseString",
    version: "1.0.2",
    description: "Parses valid duration string to ms",
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: structures_1.ArgType.Time,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ms]) {
        return structures_1.Return.success(ms);
    },
});
//# sourceMappingURL=parseString.js.map