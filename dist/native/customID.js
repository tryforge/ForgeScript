"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$customID",
    version: "1.0.0",
    description: "Retrieves the custom id of the interaction",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.interaction && "customId" in ctx.interaction ? ctx.interaction.customId : undefined);
    },
});
//# sourceMappingURL=customID.js.map