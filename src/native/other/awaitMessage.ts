import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, IExtendedCompiledFunctionConditionField, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"
import isTrue from "../../functions/isTrue"

export default new NativeFunction({
    name: "$awaitMessage",
    version: "1.0.7",
    description: "Awaits a message, returns message ID or nothing if no valid response",
    unwrap: false,
    output: ArgType.Message,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to await message on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "variable name",
            description: "The variable to load the message id that was sent as response by an user, get it with $env[<variable>]",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "filter",
            description: "The filter to run for every message sent after this",
            rest: false,
            required: true,
            condition: true,
            type: ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: ArgType.Time,
            description: "The max time to wait for a message"
        }
    ],
    async execute(ctx): Promise<Return> {
        const filter = this.data.fields![2] as IExtendedCompiledFunctionConditionField
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3)
        if (!this["isValidReturnType"](rt)) return rt
        const [ channel, varName, time ] = args
        const msg = await (channel as TextBasedChannel).awaitMessages({
            errors: [ "time" ],
            max: 1,
            time,
            filter: async (m) => {
                ctx.setEnvironmentKey(varName, m.id)
                const res = await this["resolveCondition"](ctx, filter)
                if (res.return || res.success) {
                    return isTrue(res)
                } else return false
            }
        }).catch(ctx.noop)

        return this.success(msg?.first()?.id)
    },
})