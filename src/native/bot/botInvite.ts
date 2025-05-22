import { OAuth2Scopes, PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$botInvite",
    version: "1.0.0",
    description: "Returns a bot's invite link",
    brackets: false,
    unwrap: true,
    aliases: [
        "$clientInvite",
        "$getBotInvite"
    ],
    args: [
        {
            name: "perms",
            description: "The perms for the invite link",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    output: ArgType.URL,
    execute(ctx, [perms]) {
        return this.success(
            ctx.client.generateInvite({
                scopes: ctx.client.application.installParams?.scopes as OAuth2Scopes[] || [OAuth2Scopes.Bot],
                permissions: perms as PermissionsString[] || ctx.client.application.installParams?.permissions,
            })
        )
    },
})