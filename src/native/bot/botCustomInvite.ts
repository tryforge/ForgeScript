import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botCustomInvite",
    version: "1.5.0",
    description: "Returns the client's custom invite link",
    unwrap: false,
    aliases: [
        "$clientCustomInvite"
    ],
    output: ArgType.URL,
    execute(ctx) {
        return this.success(ctx.client.application.customInstallURL)
    },
})