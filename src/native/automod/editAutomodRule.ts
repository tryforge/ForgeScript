/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { AutoModerationRuleEventType } from "discord.js"
import { ArgType, NativeFunction, Return } from "../../structures"

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
            description: "The automod rule to edit",
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
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
    async execute(ctx, [, rule, name, event, enabled, reason]) {
        const success = await rule.edit({
            name: name || undefined,
            eventType: event || undefined,
            triggerMetadata: ctx.automodRule.triggerMetadata || undefined,
            actions: ctx.automodRule.actions || undefined,
            exemptRoles: ctx.automodRule.exemptRoles || undefined,
            exemptChannels: ctx.automodRule.exemptChannels || undefined,
            enabled: typeof(enabled) === "boolean" ? enabled : undefined,
            reason: reason || ctx.reason
        }).catch(ctx.noop)

        ctx.clearAutomodRuleOptions()

        return this.success(!!success)
    },
})