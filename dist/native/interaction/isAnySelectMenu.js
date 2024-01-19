"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isAnySelectMenu",
    version: "1.0.0",
    output: structures_1.ArgType.Boolean,
    description: "Returns whether the context is a select menu",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAnySelectMenu()));
    },
});
//# sourceMappingURL=isAnySelectMenu.js.map