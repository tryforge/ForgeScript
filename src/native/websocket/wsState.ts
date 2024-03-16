import ws from "ws"
import { ArgType, NativeFunction } from "../../structures"

export enum ConnectionState {
    Connecting = ws.CONNECTING,
    Closed = ws.CLOSED,
    Closing = ws.CLOSING,
    Open = ws.OPEN
}

export default new NativeFunction({
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
            type: ArgType.Number
        }
    ],
    execute(ctx, [ id ]) {
        const ws = ctx.client.websockets.get(id)
        return this.success(ConnectionState[ws?.readyState!])
    },
})