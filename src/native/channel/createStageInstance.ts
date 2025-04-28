import { BaseChannel, ChannelType, StageChannel, StageInstancePrivacyLevel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createStageInstance",
    version: "2.3.0",
    description: "Creates a new stage instance, returns instance id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create stage instance on",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildStageVoice,
        },
        {
            name: "topic",
            description: "The topic of the stage instance",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "privacy level",
            description: "The privacy level of the stage instance",
            rest: false,
            type: ArgType.Enum,
            enum: StageInstancePrivacyLevel
        },
        {
            name: "notify",
            description: "Whether to notify @everyone that the stage instance has started",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "event ID",
            description: "The scheduled event associated with the stage instance",
            rest: false,
            type: ArgType.ScheduledEvent,
            pointer: 0,
            pointerProperty: "guild",
        },
    ],
    output: ArgType.StageInstance,
    async execute(ctx, [channel, topic, level, notify, event]) {
        const instance = await (channel as StageChannel).createStageInstance({
            topic,
            privacyLevel: level || undefined,
            guildScheduledEvent: event || undefined,
            sendStartNotification: typeof(notify) === "boolean" ? notify : undefined
        }).catch(ctx.noop)

        return this.success(instance?.id)
    },
})