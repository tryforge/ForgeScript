"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$createAutomodRule",
    version: "1.5.0",
    description: "Creates a new automod rule for a guild, returns rule id",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create automod rule on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "trigger",
            description: "The trigger type of the automod rule",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationRuleTriggerType
        },
        {
            name: "event",
            description: "The event type of the automod rule",
            rest: false,
            required: true,
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
            description: "The reason for creating the automod rule",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.AutomodRule,
    async execute(ctx, [guild, name, trigger, event, enabled, reason]) {
        const rule = await guild.autoModerationRules.create({
            name: name,
            eventType: event,
            triggerType: trigger,
            triggerMetadata: ctx.automodRule.triggerMetadata,
            actions: ctx.automodRule.actions || [],
            exemptRoles: ctx.automodRule.exemptRoles,
            exemptChannels: ctx.automodRule.exemptChannels,
            enabled: (0, lodash_1.isBoolean)(enabled) ? enabled : true,
            reason: reason || undefined
        }).catch(ctx.noop);
        ctx.clearAutomodRuleOptions();
        return this.success(rule?.id);
    },
});
//# sourceMappingURL=createAutomodRule.js.map