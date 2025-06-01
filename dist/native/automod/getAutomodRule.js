"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const automodRule_1 = require("../../properties/automodRule");
exports.default = new structures_1.NativeFunction({
    name: "$getAutomodRule",
    version: "1.5.0",
    description: "Returns an automod rule of a guild",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rule from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The id of the automod rule to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of the automod rule to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: automodRule_1.AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [guild, id, prop, sep]) {
        const rule = await (guild ?? ctx.guild)?.autoModerationRules.fetch(id).catch(ctx.noop);
        if (prop && rule)
            return this.success(automodRule_1.AutomodRuleProperties[prop](rule, sep));
        return this.successJSON(rule);
    },
});
//# sourceMappingURL=getAutomodRule.js.map