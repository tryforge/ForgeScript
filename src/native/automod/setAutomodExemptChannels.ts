import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodExemptChannels",
    version: "1.5.0",
    description: "Sets exempt channels for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channels",
            description: "The channels that should not be affected by the automod rule",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [channels]) {
        ctx.automodRule.exemptChannels = channels
        return this.success()
    },
})