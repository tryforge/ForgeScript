import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodExemptRoles",
    version: "1.5.0",
    description: "Sets exempt roles for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "roles",
            description: "The roles that should not be affected by the automod rule",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [roles]) {
        ctx.automodRule.exemptRoles = roles
        return this.success()
    },
})