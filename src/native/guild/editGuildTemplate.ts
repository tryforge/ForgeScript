import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$editGuildTemplate",
    version: "1.5.0",
    description: "Edits template on a guild, returns bool",
    aliases: [
        "$editServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to edit",
            rest: false,
            required: true,
            type: ArgType.Template,
        },
        {
            name: "name",
            description: "The new name for the template",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The new description for the template",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [template, name, desc]) {
        const edit = await template.edit({
            name: name || undefined,
            description: desc ?? undefined
        }).catch(ctx.noop)

        return this.success(!!edit)
    },
})