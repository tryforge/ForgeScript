"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isMentionableSelectMenu",
    version: "1.0.0",
    description: "Returns whether the context is a mentionable select menu",
    unwrap: false,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isMentionableSelectMenu()));
    },
});
//# sourceMappingURL=isMentionableSelectMenu.js.map