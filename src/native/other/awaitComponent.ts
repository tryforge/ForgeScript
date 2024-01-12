import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"
import isTrue from "../../functions/isTrue"

export default new NativeFunction({
    name: "$awaitComponent",
    version: "1.4.0",
    description: "Awaits a component, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
            description: "The message to await component on"
        },
        {
            name: "filter",
            description: "The filter to run for every interaction received after this, this is called with interaction context",
            rest: false,
            required: true,
            condition: true,
            type: ArgType.String
        },
        {
            name: "success code",
            description: "The code to execute on success, this is called with interaction context",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "time",
            rest: false,
            required: true,
            type: ArgType.Time,
            description: "The max time to wait for a component"
        }
    ],
    async execute(ctx): Promise<Return> {
        const filter = this.data.fields![2] as IExtendedCompiledFunctionConditionField
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 4)
        if (!this["isValidReturnType"](rt)) return rt
        const [ , msg, time ] = args

        const int = await msg.awaitMessageComponent({
            time,
            filter: async (m) => {
                const res = await this["resolveCondition"](ctx.clone({ obj: m }), filter)
                if (res.return || res.success) {
                    return isTrue(res)
                } else return false
            }
        }).catch(noop)
        
        if (int) {
            const rt = await this["resolveCode"](ctx.clone({ obj: int }), this.data.fields![3] as IExtendedCompiledFunctionField)
            if (!this["isValidReturnType"](rt))
                return rt
        }

        return this.success(!!int)
    },
})