import { ComponentType, ContainerBuilder, FileBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { addActionRow } from "../../functions/componentBuilders"

export default new NativeFunction({
    name: "$addFile",
    version: "2.4.0",
    description: "Adds a new file component",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "url",
            description: "The url of the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "spoiler",
            description: "Whether to set a spoiler",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    execute(ctx, [url, spoiler]) {
        addActionRow(ctx)
        const comp = ctx.container.components.at(-1)
        const file = new FileBuilder().setURL(url).setSpoiler(!!spoiler)

        if (comp instanceof ContainerBuilder && ctx.container.isInside(ComponentType.Container))
            comp.addFileComponents(file)
        else ctx.container.components.push(file)

        return this.success()
    },
})