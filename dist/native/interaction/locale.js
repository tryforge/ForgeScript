"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$locale",
    description: "Retrieves the user locale of the interaction",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.interaction?.locale);
    },
});
//# sourceMappingURL=locale.js.map