import array from "../../functions/array"
import fetchAllMessages from "../../functions/fetchAllMessages"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$transcript",
    version: "1.4.0",
    aliases: ["$channelTranscript", "$createTranscript"],
    description: "Creates a channel transcript",
    brackets: true,
    output: array<ArgType.String>(),
    unwrap: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to create transcript of",
            rest: false,
            required: true,
            type: ArgType.TextChannel,
        },
        {
            name: "variable",
            description: "The $env variable name to load the message id to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The code to use for every message, make sure to use $return",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "full",
            description: "Whether to load entire message object to the variable",
            rest: false,
            required: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3, 4)
        if (!this["isValidReturnType"](rt)) return rt

        const [channel, varName, sep, full] = args
        const code = this.data.fields![2] as IExtendedCompiledFunctionField

        const msgs = await fetchAllMessages(channel)
        const results = new Array<string>()

        for (let i = 0, len = msgs.length; i < len; i++) {
            const msg = msgs[i]
            ctx.setEnvironmentKey(varName, full ? msg : msg.id)
            const resolved = await this["resolveCode"](ctx, code)
            if (resolved.return) results.push(resolved.value as string)
            else if (!this["isValidReturnType"](resolved)) return resolved
        }

        return this.success(results.join(sep ?? ", "))
    },
})
