/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { ArgType, NativeFunction, Return } from "../../structures"
import { AutomodRuleProperty, AutomodRuleProperties } from "../../properties/automodRule"

export default new NativeFunction({
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
            type: ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The automod rule to get",
            rest: false,
            required: true,
            type: ArgType.AutomodRule,
            pointer: 0
        },
        {
            name: "property",
            description: "The property of the automod rule to return",
            rest: false,
            type: ArgType.Enum,
            enum: AutomodRuleProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [, rule, prop, sep ]) {
        if (prop) return this.success(AutomodRuleProperties[prop](rule, sep))
        return this.successJSON(rule)
    },
})