"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$wsClose",
    version: "1.5.0",
    description: "Closes a websocket connection and removes all listeners of it",
    aliases: [
        "$websocketClose"
    ],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "websocket ID",
            description: "The id of the websocket to attach this listener to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "code",
            description: "The status code to send",
            rest: false,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [id, code]) {
        const ws = ctx.client.websockets.get(id);
        if (ws)
            ws.close(code ?? undefined);
        return this.success();
    },
});
//# sourceMappingURL=wsClose.js.map