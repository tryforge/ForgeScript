"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteIn",
    version: "1.5.0",
    description: "Deletes the response after the given time",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The duration to wait for until deletion",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time,
        },
    ],
    execute(ctx, [ms]) {
        ctx.container.deleteIn = ms;
        return this.success();
    },
});
//# sourceMappingURL=deleteIn.js.map