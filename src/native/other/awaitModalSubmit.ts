import { BaseChannel, TextBasedChannel } from "discord.js"
import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import noop from "../../functions/noop"
import isTrue from "../../functions/isTrue"

export default new NativeFunction({
    name: "$awaitModalSubmit",
    version: "1.4.0",
    description: "Awaits a modal submit, executing the code as the interaction context, returns bool depending on whether the interaction was received",
    unwrap: false,
    output: ArgType.Boolean,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The modal's custom id to wait for",
            rest: false,
            required: true,
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
        if (!ctx.interaction || !("awaitModalSubmit" in ctx.interaction))
            return this.success(false)

        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 2)
        if (!this["isValidReturnType"](rt)) return rt
        const [ id, time ] = args

        const int = await ctx.interaction.awaitModalSubmit({
            time,
            filter: i => i.customId === id
        }).catch(ctx.noop)
        
        if (int) {
            const rt = await this["resolveCode"](ctx.clone({ obj: int }), this.data.fields![0] as IExtendedCompiledFunctionField)
            if (!this["isValidReturnType"](rt))
                return rt
        }

        return this.success(!!int)
    },
})