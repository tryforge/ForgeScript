import { ComponentType, ContainerBuilder } from "discord.js"
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/componentBuilders"

export default new NativeFunction({
    name: "$addContainer",
    version: "2.4.0",
    description: "Adds a new container component",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "components",
            description: "The components to add",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "color",
            description: "The color to set",
            rest: false,
            type: ArgType.Color,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx) {
        addActionRow(ctx)
        ctx.container.components.push(new ContainerBuilder())
        ctx.container.inside.push(ComponentType.Container)
        const comp = ctx.container.components.at(-1) as ContainerBuilder

        if (this.displayField(1)) {
            const color = await this["resolveUnhandledArg"](ctx, 1)
            if (!this["isValidReturnType"](color)) return color
            comp.setAccentColor(color.value as number)
        }

        if (this.displayField(2)) {
            const spoiler = await this["resolveUnhandledArg"](ctx, 2)
            if (!this["isValidReturnType"](spoiler)) return spoiler
            comp.setSpoiler(spoiler.value as boolean)
        }

        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        const resolved = await this["resolveCode"](ctx, code)
        if (!this["isValidReturnType"](resolved)) return resolved

        addActionRow(ctx)
        ctx.container.inside.pop()
        return this.success()
    },
})