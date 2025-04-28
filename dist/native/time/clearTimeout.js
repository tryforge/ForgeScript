"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$clearTimeout",
    version: "2.3.0",
    description: "Clears an active timeout, returns bool",
    aliases: ["$stopTimeout"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The name of the timeout",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [name]) {
        const timeout = ctx.client.timeouts.get(name);
        clearTimeout(timeout);
        ctx.client.timeouts.delete(name);
        return this.success(!!timeout);
    },
});
//# sourceMappingURL=clearTimeout.js.map