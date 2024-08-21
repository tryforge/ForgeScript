import { ArgType, NativeFunction } from "../../structures"
import { WebSocket } from "ws"

let IncrementalWebsocketIds = 0

export default new NativeFunction({
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
            type: ArgType.String
        }
    ],
    output: ArgType.Number,
    execute(ctx, [ host ]) {
        const ws = new WebSocket(host)
        const id = ++IncrementalWebsocketIds

        // PREVENT CRASH
        ws?.on("error", ctx.noop)

        // CLEANUP
        ws?.on("close", () => {
            ctx.client.websockets.delete(id)
            ws.removeListener
        })

        ctx.client.websockets.set(id, ws)
        return this.success(id)
    },
})