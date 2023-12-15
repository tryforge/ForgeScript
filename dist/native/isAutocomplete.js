"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isAutocomplete",
    version: "1.0.6",
    description: "Returns whether the interaction is autocomplete",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isAutocomplete()));
    },
});
//# sourceMappingURL=isAutocomplete.js.map