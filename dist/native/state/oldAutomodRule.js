"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const automodRule_1 = require("../../properties/automodRule");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldAutomodRule",
    version: "1.5.0",
    description: "Retrieves old data from an event whose context was an automod rule instance",
    brackets: true,
    output: structures_1.ArgType.Unknown,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: automodRule_1.AutomodRuleProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.successJSON(automodRule_1.AutomodRuleProperties[prop](ctx.states?.automodRule?.old, sep));
    },
});
//# sourceMappingURL=oldAutomodRule.js.map