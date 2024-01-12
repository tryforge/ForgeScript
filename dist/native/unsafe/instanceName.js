"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$instanceName",
    version: "1.4.0",
    aliases: [
        "$instance",
        "$contextInstance"
    ],
    description: "Returns the context's instance name",
    output: structures_1.ArgType.String,
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.obj?.constructor?.name);
    },
});
//# sourceMappingURL=instanceName.js.map