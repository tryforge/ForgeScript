import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$wsSend",
    version: "1.5.0",
    description: "Sends a websocket message",
    aliases: [
        "$websocketSend"
    ],
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "websocket ID",
            description: "The id of the websocket to attach this listener to",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "value",
            description: "The json value to send over",
            rest: false,
            required: true,
            type: ArgType.Json
        },
        {
            name: "callback",
            description: "Code to execute on completion of request",
            rest: false,
            type: ArgType.String
        },
        {
            name: "variable name",
            description: "Variable to store error on if callback was called for an error",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3)
        if (!this["isValidReturnType"](rt)) return rt 

        const [ id, value, param ] = args
        const cb = this.data.fields![2] as IExtendedCompiledFunctionField

        const ws = ctx.client.websockets.get(id)
        if (ws) {
            ws.send(JSON.stringify(value), cb ? async (err) => {
                if (param)
                    ctx.setEnvironmentKey(param, err)
                await this["resolveCode"](ctx, cb)
            } : undefined)
        }

        return this.success()
    }
})