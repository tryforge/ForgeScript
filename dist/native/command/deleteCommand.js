"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteCommand",
    version: "1.2.0",
    description: "Deletes the author's message",
    unwrap: false,
    async execute(ctx) {
        await ctx.message?.delete().catch(ctx.noop);
        return this.success();
    },
});
//# sourceMappingURL=deleteCommand.js.map