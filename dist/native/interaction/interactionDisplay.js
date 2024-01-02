"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandDisplay",
    description: "Gets the full command interaction with all options",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.applicationCommands.getDisplay(ctx.interaction));
    },
});
//# sourceMappingURL=interactionDisplay.js.map