"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createInvite",
    version: "1.1.0",
    brackets: true,
    description: "Creates an invite, returns the invite code",
    unwrap: true,
    output: structures_1.ArgType.Invite,
    args: [
        {
            name: "channel ID",
            description: "The channel to make the invite for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "createInvite" in i,
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "max age",
            description: "The max age for this invite",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating this invite",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx, [ch, maxUses, maxAge, reason]) {
        const channel = (ch ?? ctx.channel);
        const invite = await channel
            .createInvite({
            reason: reason || ctx.reason,
            maxUses: maxUses || undefined,
            maxAge: typeof (maxAge) === "number" ? maxAge : undefined,
            unique: true
        })
            .catch(ctx.noop);
        return this.success(invite ? invite.code : undefined);
    },
});
//# sourceMappingURL=createInvite.js.map