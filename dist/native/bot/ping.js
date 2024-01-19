"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$ping",
    version: "1.0.0",
    description: "The current bot ping",
    unwrap: false,
    aliases: [
        "$clientPing",
        "$botPing"
    ],
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.ws.ping);
    },
});
//# sourceMappingURL=ping.js.map