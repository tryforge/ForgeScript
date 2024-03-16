"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionState = void 0;
const ws_1 = __importDefault(require("ws"));
const structures_1 = require("../../structures");
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = ws_1.default.CONNECTING] = "Connecting";
    ConnectionState[ConnectionState["Closed"] = ws_1.default.CLOSED] = "Closed";
    ConnectionState[ConnectionState["Closing"] = ws_1.default.CLOSING] = "Closing";
    ConnectionState[ConnectionState["Open"] = ws_1.default.OPEN] = "Open";
})(ConnectionState || (exports.ConnectionState = ConnectionState = {}));
exports.default = new structures_1.NativeFunction({
    name: "$wsState",
    version: "1.5.0",
    output: ConnectionState,
    description: "Returns a websocket's connection state",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "websocket ID",
            description: "The websocket to get its state",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        }
    ],
    execute(ctx, [id]) {
        const ws = ctx.client.websockets.get(id);
        return this.success(ConnectionState[ws?.readyState]);
    },
});
//# sourceMappingURL=wsState.js.map