"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$showModal",
    version: "1.4.0",
    description: "Submits the modal",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "showModal" in ctx.interaction && ctx.container.modal) {
            await ctx.interaction.showModal(ctx.container.modal).catch(ctx.noop);
            ctx.container.reset();
        }
        return this.success();
    },
});
//# sourceMappingURL=showModal.js.map