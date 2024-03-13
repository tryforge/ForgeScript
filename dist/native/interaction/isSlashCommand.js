"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isSlashCommand",
    version: "1.4.0",
    description: "Whether the interaction is a slash command",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(Boolean(ctx.interaction?.isChatInputCommand()));
    },
});
//# sourceMappingURL=isSlashCommand.js.map