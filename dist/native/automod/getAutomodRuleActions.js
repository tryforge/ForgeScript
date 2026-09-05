"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const automodRule_1 = require("../../properties/automodRule");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$getAutomodRuleActions",
    version: "2.6.0",
    description: "Returns the actions of an automod rule from a guild",
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
            description: "The automod rule to get its actions",
            rest: false,
            required: true,
            type: structures_1.ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of each action to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: automodRule_1.AutomodRuleActionProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    execute(ctx, [, rule, prop, sep]) {
        if (prop)
            return this.success(rule.actions.map((x) => automodRule_1.AutomodRuleActionProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(rule.actions);
    },
});
//# sourceMappingURL=getAutomodRuleActions.js.map