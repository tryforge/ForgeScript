"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageType",
    version: "1.0.0",
    description: "Returns the message type",
    unwrap: false,
    execute(ctx) {
        return this.success(discord_js_1.MessageType[ctx.message?.type]);
    },
});
//# sourceMappingURL=messageType.js.map