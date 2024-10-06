import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$deleteAutomodRule",
    version: "1.5.0",
    description: "Deletes an automod rule from a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete automod rule from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The id of the automod rule to delete",
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "reason",
            description: "The reason for deleting the rule",
            rest: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [, rule, reason]) {
        try {
            await rule.delete(reason || undefined)
        } catch (error) {
            ctx.noop(error)
            return this.success(false)
        }

        return this.success(true)
    },
})