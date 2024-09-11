import { AutoModerationRuleEventType, AutoModerationRuleResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"
import { isBoolean } from "lodash"

export default new NativeFunction({
    name: "$editAutomodRule",
    version: "1.5.0",
    description: "Edits an automod rule on a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit automod rule on",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The id of the automod rule to edit",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "name",
            description: "The new name for the automod rule",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "event",
            description: "The new event type for the automod rule",
            rest: false,
            type: ArgType.Enum,
            enum: AutoModerationRuleEventType
        },
        {
            name: "enabled",
            description: "Whether the automod rule should be enabled",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "reason",
            description: "The reason for editing the automod rule",
            rest: false,
            required: false,
            type: ArgType.String
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ guild, id, name, event, enabled, reason ]) {
        const rule = await guild.autoModerationRules.edit(id as AutoModerationRuleResolvable, {
            name: name || undefined,
            eventType: event || undefined,
            triggerMetadata: ctx.automodRule.triggerMetadata || undefined,
            actions: ctx.automodRule.actions || undefined,
            exemptRoles: ctx.automodRule.exemptRoles || undefined,
            exemptChannels: ctx.automodRule.exemptChannels || undefined,
            enabled: isBoolean(enabled) ? enabled : undefined,
            reason: reason || undefined
        }).catch(ctx.noop)

        return this.success(!!rule)
    },
})