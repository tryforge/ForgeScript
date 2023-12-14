"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateApplicationCommands",
    description: "Updates application commands commands",
    unwrap: false,
    execute(ctx) {
        ctx.client.applicationCommands.load();
        return this.success();
    },
});
//# sourceMappingURL=updateApplicationCommands.js.map