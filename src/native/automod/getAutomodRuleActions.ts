/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleActionProperty, AutomodRuleActionProperties } from "../../properties/automodRule"
import array from "../../functions/array"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The automod rule to get its actions",
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of each action to return",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleActionProperty
        },
        {
            name: "separator",
            description: "The separator to use for every property",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    execute(ctx, [, rule, prop, sep ]) {
        if (prop) return this.success(rule.actions.map((x) => AutomodRuleActionProperties[prop](x)).join(sep ?? ", "))
        return this.successJSON(rule.actions)
    },
})