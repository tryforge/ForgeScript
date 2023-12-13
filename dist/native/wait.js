"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("timers/promises");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$wait",
    version: "1.0.0",
    description: "Delays the code below for x milliseconds",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "duration",
            description: "The duration to wait for",
            rest: false,
            type: structures_1.ArgType.Time,
            required: true,
        },
    ],
    async execute(_, [ms]) {
        await (0, promises_1.setTimeout)(ms);
        return this.success();
    },
});
//# sourceMappingURL=wait.js.map