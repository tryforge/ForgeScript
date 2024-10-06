import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteApplicationEmoji",
    version: "1.5.0",
    description: "Deletes an application emoji, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji to edit",
            rest: false,
            required: true,
            type: ArgType.ApplicationEmoji,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [emoji]) {
        return this.success(!!(await emoji.delete().catch(ctx.noop)))
    },
})