import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setTimezone",
    version: "1.5.0",
    aliases: ["$timezone"],
    description: "Sets the timezone for time functions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "timezone",
            description: "The timezone to set",
            rest: false,
            type: ArgType.String,
            required: true,
        }
    ],
    async execute(ctx, [timezone]) {
        ctx.timezone = timezone
        return this.success()
    }
})