"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationSubCommandName",
    version: "1.5.0",
    description: "Returns the application sub command name of this interaction",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction && "options" in ctx.interaction && "getSubcommand" in ctx.interaction.options ? ctx.interaction.options.getSubcommand(false) : undefined);
    },
});
//# sourceMappingURL=applicationSubCommandName.js.map