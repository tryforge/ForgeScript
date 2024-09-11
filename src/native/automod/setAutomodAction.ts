import { BaseChannel, AutoModerationActionType, GuildTextChannelResolvable, ThreadChannel, AutoModerationActionOptions } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$setAutomodAction",
    version: "1.5.0",
    description: "Sets a new action for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The type of the automod rule action",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: AutoModerationActionType
        },
        {
            name: "channel ID",
            description: "The channel to which content will be logged",
            rest: false,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "duration",
            description: "The timeout duration in seconds",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "message",
            description: "The custom message that is shown whenever a message is blocked",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [ type, channel, duration, message ]) {
        const action = {
            type: type,
            metadata: {
                channel: channel as GuildTextChannelResolvable | ThreadChannel,
                customMessage: message,
                durationSeconds: duration
            }
        } as AutoModerationActionOptions

        ctx.automodRule.actions ??= []
        ctx.automodRule.actions.push(action)

        return this.success()
    },
})