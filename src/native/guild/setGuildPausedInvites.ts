import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setGuildPausedInvites",
    version: "1.5.0",
    description: "Sets a guild paused invite status, returns bool",
    aliases: [
        "$setServerPausedInvites"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to set paused invites for",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "disabled",
            description: "Whether to disable the invites",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [guild, disabled]) {
        return this.success((await guild.disableInvites(disabled).catch(() => false)) !== false)
    },
})