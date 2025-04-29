import { ActionRow, ActionRowBuilder, ButtonBuilder, MessageActionRowComponent } from "discord.js"
import { ArgType, Container, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addActionRowTo",
    version: "1.5.0",
    brackets: true,
    description: "Adds an action row (or rows) to a message",
    unwrap: false,
    aliases: [
        "$addActionRowsTo"
    ],
    args: [
        {
            name: "channel ID",
            description: "The channel id to pull message from",
            rest: false,
            required: true,
            type: ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to add row to",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0
        },
        {
            name: "components",
            description: "Components for this row",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "keep existing rows",
            description: "Whether to keep or remove existing rows of given message",
            rest: false,
            required: false,
            type: ArgType.Boolean
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3)
        if (!this["isValidReturnType"](rt)) return rt
        
        const [, m, keep ] = args
        const code = this.data.fields![2] as IExtendedCompiledFunctionField

        const rows = keep ? m.components.map(x => ActionRowBuilder.from(x as ActionRow<MessageActionRowComponent>)) : new Array<ActionRowBuilder>()

        const oldContainer = ctx.runtime.container
        const newContainer = new Container()
        
        // Add our new rows
        newContainer.components = rows

        // Use new container
        ctx.container = newContainer

        const codeExec = await this["resolveCode"](ctx, code)

        // Return the container
        ctx.container = oldContainer!

        if (!this["isValidReturnType"](codeExec)) return codeExec

        // Since rows is a reference, we do not need to retrieve from container.
        return this.success(
            !!(await m.edit({ components: rows as ActionRowBuilder<ButtonBuilder>[] }).catch(ctx.noop))
        )
    },
})