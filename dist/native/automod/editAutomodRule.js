"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
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
            type: structures_1.ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The automod rule to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "name",
            description: "The new name for the automod rule",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "event",
            description: "The new event type for the automod rule",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleEventType
        },
        {
            name: "enabled",
            description: "Whether the automod rule should be enabled",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "reason",
            description: "The reason for editing the automod rule",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, rule, name, event, enabled, reason]) {
        const success = await rule.edit({
            name: name || undefined,
            eventType: event || undefined,
            triggerMetadata: ctx.automodRule.triggerMetadata || undefined,
            actions: ctx.automodRule.actions || undefined,
            exemptRoles: ctx.automodRule.exemptRoles || undefined,
            exemptChannels: ctx.automodRule.exemptChannels || undefined,
            enabled: typeof (enabled) === "boolean" ? enabled : undefined,
            reason: reason || ctx.reason
        }).catch(ctx.noop);
        ctx.clearAutomodRuleOptions();
        return this.success(!!success);
    },
});
//# sourceMappingURL=editAutomodRule.js.map