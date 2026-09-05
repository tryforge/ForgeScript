"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const clientTheme_1 = require("../../properties/clientTheme");
exports.default = new structures_1.NativeFunction({
    name: "$getMessageClientTheme",
    version: "2.7.0",
    description: "Retrieves the shared client theme sent with a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to get its client theme",
            rest: false,
            type: structures_1.ArgType.Message,
            pointer: 0,
            required: true,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: clientTheme_1.ClientThemeProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [, message, prop, sep]) {
        const theme = (message ?? ctx.message)?.sharedClientTheme;
        return this.success(clientTheme_1.ClientThemeProperties[prop](theme, sep));
    },
});
//# sourceMappingURL=getMessageClientTheme.js.map