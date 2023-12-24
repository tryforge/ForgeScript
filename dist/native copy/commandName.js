"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$commandName",
    version: "1.0.3",
    description: "Returns the current command name",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.runtime.command?.name ?? (ctx.obj && "commandName" in ctx.obj ? ctx.obj.commandName : undefined));
    },
});
//# sourceMappingURL=commandName.js.map