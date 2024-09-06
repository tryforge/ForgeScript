import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteGuildTemplate",
    version: "1.5.0",
    description: "Deletes template from a guild, returns bool",
    aliases: [
        "$deleteServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to delete",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [code]) {
        return this.success(!!(await (await ctx.client.fetchGuildTemplate(code)).delete().catch()))
    },
})