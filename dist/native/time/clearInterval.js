"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearInterval",
    version: "2.3.0",
    description: "Clears an active interval, returns bool",
    aliases: ["$stopInterval"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the interval",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [name]) {
        const interval = ctx.client.intervals.get(name);
        clearInterval(interval);
        ctx.client.intervals.delete(name);
        return this.success(!!interval);
    },
});
//# sourceMappingURL=clearInterval.js.map