"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildStageVoice,
        },
        {
            name: "topic",
            description: "The topic of the stage instance",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "privacy level",
            description: "The privacy level of the stage instance",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.StageInstancePrivacyLevel
        },
        {
            name: "notify",
            description: "Whether to notify @everyone that the stage instance has started",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "event ID",
            description: "The scheduled event associated with the stage instance",
            rest: false,
            type: structures_1.ArgType.ScheduledEvent,
            pointer: 0,
            pointerProperty: "guild",
        },
    ],
    output: structures_1.ArgType.StageInstance,
    async execute(ctx, [channel, topic, level, notify, event]) {
        const instance = await channel.createStageInstance({
            topic,
            privacyLevel: level || undefined,
            guildScheduledEvent: event || undefined,
            sendStartNotification: typeof (notify) === "boolean" ? notify : undefined
        }).catch(ctx.noop);
        return this.success(instance?.id);
    },
});
//# sourceMappingURL=createStageInstance.js.map