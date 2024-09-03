import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botUserInstallCount",
    version: "1.5.0",
    aliases: ["$clientUserInstallCount"],
    description: "Returns the user install count of the bot",
    unwrap: true,
    output: ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.application.approximateUserInstallCount)
    },
})