"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchThreads",
    version: "2.5.0",
    description: "Caches all threads of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to cache its threads",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => "threads" in i
        },
        {
            name: "archived",
            description: "Whether to cache archived threads, otherwise active",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
        {
            name: "private",
            description: "Whether to cache archived private threads, otherwise public",
            rest: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx, [channel, archived, priv]) {
        const chan = channel ?? ctx.channel;
        if ("threads" in chan) {
            const threads = chan.threads;
            if (archived)
                await threads.fetchArchived({ type: priv ? "private" : undefined, fetchAll: true }).catch(ctx.noop);
            else
                await threads.fetchActive().catch(ctx.noop);
        }
        return this.success();
    },
});
//# sourceMappingURL=fetchThreads.js.map