"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$updateApplicationCommands",
    version: "1.2.0",
    description: "Updates application commands commands",
    unwrap: false,
    async execute(ctx) {
        ctx.client.applicationCommands.load();
        await ctx.client.applicationCommands.register();
        return this.success();
    },
});
//# sourceMappingURL=updateApplicationCommands.js.map