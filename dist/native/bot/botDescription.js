"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botDescription",
    version: "1.5.0",
    aliases: ["$clientDescription"],
    description: "Returns the description of the bot",
    unwrap: true,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(ctx.client.application.description);
    },
});
//# sourceMappingURL=botDescription.js.map