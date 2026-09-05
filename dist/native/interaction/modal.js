"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$modal",
    version: "1.0.0",
    description: "Creates a modal",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this modal",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "title",
            description: "The title for the modal",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [id, title]) {
        if (ctx.interaction)
            ctx.container.modal = new discord_js_1.ModalBuilder().setCustomId(id).setTitle(title);
        return this.success();
    },
});
//# sourceMappingURL=modal.js.map