"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deferUpdate",
    version: "1.3.0",
    description: "Defers this interaction as an update",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "deferUpdate" in ctx.interaction) {
            await ctx.interaction.deferUpdate();
        }
        return this.success();
    },
});
//# sourceMappingURL=deferUpdate.js.map