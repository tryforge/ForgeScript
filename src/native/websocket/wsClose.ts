import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
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
            type: ArgType.Number
        },
        {
            name: "code",
            description: "The status code to send",
            rest: false,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ id, code ]) {
        const ws = ctx.client.websockets.get(id)
        if (ws)
            ws.close(code ?? undefined)
        return this.success()
    },
})