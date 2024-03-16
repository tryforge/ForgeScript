"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const ws_1 = require("ws");
let IncrementalWebsocketIds = 0;
exports.default = new structures_1.NativeFunction({
    name: "$ws",
    version: "1.5.0",
    description: "Creates a WebSocket connection to a server",
    aliases: [
        "$websocket"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "host",
            description: "The WS host, formatted as wss://hostname:port",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Number,
    execute(ctx, [host]) {
        const ws = new ws_1.WebSocket(host);
        const id = ++IncrementalWebsocketIds;
        // PREVENT CRASH
        ws?.on("error", ctx.noop);
        // CLEANUP
        ws?.on("close", () => {
            ctx.client.websockets.delete(id);
            ws.removeAllListeners();
        });
        ctx.client.websockets.set(id, ws);
        return this.success(id);
    },
});
//# sourceMappingURL=ws.js.map