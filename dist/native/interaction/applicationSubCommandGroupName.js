"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationSubCommandGroupName",
    version: "1.5.0",
    description: "Returns the application sub command group name of this interaction",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.interaction && "options" in ctx.interaction && "getSubcommandGroup" in ctx.interaction.options ? ctx.interaction.options.getSubcommandGroup(false) : undefined);
    },
});
//# sourceMappingURL=applicationSubCommandGroupName.js.map