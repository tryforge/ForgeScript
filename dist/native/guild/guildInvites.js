"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invite_1 = require("../../properties/invite");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$guildInvites",
    version: "2.5.0",
    description: "Returns all invites of a guild",
    aliases: [
        "$serverInvites"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
            description: "The guild to pull invites from"
        },
        {
            name: "property",
            rest: false,
            type: structures_1.ArgType.Enum,
            description: "The property of the invites to return",
            enum: invite_1.InviteProperty
        },
        {
            name: "separator",
            rest: false,
            type: structures_1.ArgType.String,
            description: "The separator to use for each property"
        }
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const invites = await (guild ?? ctx.guild)?.invites.fetch().catch(ctx.noop);
        if (invites && prop)
            return this.success(invites.map((x) => invite_1.InviteProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(invites);
    },
});
//# sourceMappingURL=guildInvites.js.map