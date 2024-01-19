"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$test",
    version: "1.4.0",
    description: "This is just a test function",
    unwrap: true,
    args: [
        structures_1.Arg.requiredEnum(discord_js_1.MessageType)
    ],
    execute(ctx, args) {
        return this.success();
    },
});
//# sourceMappingURL=test.js.map