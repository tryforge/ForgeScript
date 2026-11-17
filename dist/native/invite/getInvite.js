"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const invite_1 = require("../../properties/invite");
exports.default = new structures_1.NativeFunction({
    name: "$getInvite",
    version: "2.2.0",
    description: "Returns information about an invite",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: structures_1.ArgType.Invite,
        },
        {
            name: "property",
            description: "The property of the invite to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: invite_1.InviteProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    execute(ctx, [invite, prop, sep]) {
        if (prop)
            return this.success(invite_1.InviteProperties[prop](invite, sep));
        return this.successJSON(invite);
    },
});
//# sourceMappingURL=getInvite.js.map