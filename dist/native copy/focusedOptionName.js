"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$focusedOptionName",
    version: "1.0.6",
    description: "Returns the focused option of the command",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.interaction?.isAutocomplete() ? ctx.interaction.options.getFocused(true).name : undefined);
    },
});
//# sourceMappingURL=focusedOptionName.js.map