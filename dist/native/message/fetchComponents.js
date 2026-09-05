"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const components_1 = require("../../functions/components");
exports.default = new structures_1.NativeFunction({
    name: "$fetchComponents",
    version: "1.0.0",
    description: "Fetches a message's components, this will override any other component added to the response",
    aliases: ["$fetchRows"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to get the components from",
            pointer: 0,
            rest: false,
            type: structures_1.ArgType.Message,
            required: true,
        },
    ],
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => (0, components_1.buildComponent)(x, ctx)) ?? [];
        return this.success();
    },
});
//# sourceMappingURL=fetchComponents.js.map