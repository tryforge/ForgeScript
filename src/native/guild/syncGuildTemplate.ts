import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$syncGuildTemplate",
    version: "2.4.0",
    description: "Syncs this template to the current state of the guild, returns bool",
    aliases: [
        "$syncServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to sync",
            rest: false,
            required: true,
            type: ArgType.Template
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [template]) {
        return this.success(!!(await template.sync().catch(ctx.noop)))
    },
})