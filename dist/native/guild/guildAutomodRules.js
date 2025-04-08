"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const automodRule_1 = require("../../properties/automodRule");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$guildAutomodRules",
    version: "1.5.0",
    description: "Returns all automod rules of a guild",
    aliases: ["$getAutomodRules"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get automod rules from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each automod rule to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: automodRule_1.AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const rules = await (guild ?? ctx.guild)?.autoModerationRules?.fetch().catch(ctx.noop);
        if (rules && prop) {
            const data = rules.map(rule => automodRule_1.AutomodRuleProperties[prop](rule, sep));
            return this.successJSON(data.every(item => typeof item === "object" && item !== null) ? data : data.join(sep ?? ", "));
        }
        return this.successJSON(rules);
    },
});
//# sourceMappingURL=guildAutomodRules.js.map