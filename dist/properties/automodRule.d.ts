import { AutoModerationRule } from "discord.js";
export declare enum AutomodRuleProperty {
    id = "id",
    name = "name",
    authorID = "authorID",
    enabled = "enabled",
    eventType = "eventType",
    triggerType = "triggerType",
    exemptRoles = "exemptRoles",
    exemptChannels = "exemptChannels"
}
export declare const AutomodRuleProperties: import("../functions/defineProperties").Properties<typeof AutomodRuleProperty, AutoModerationRule>;
//# sourceMappingURL=automodRule.d.ts.map