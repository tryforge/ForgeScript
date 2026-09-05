"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const message_1 = require("../../properties/message");
exports.default = new structures_1.NativeFunction({
    name: "$getMessage",
    version: "1.0.3",
    description: "Retrieves data of a message, not providing any property returns message json",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: message_1.MessageProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [, m, prop, sep]) {
        if (!prop)
            return this.successJSON(m);
        return this.success(message_1.MessageProperties[prop](m, sep || ", "));
    },
});
//# sourceMappingURL=getMessage.js.map