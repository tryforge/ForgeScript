"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$shardCount",
    version: "2.1.0",
    aliases: [
        "$botShardCount",
        "$clientShardCount"
    ],
    description: "Returns the shard count of the client",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.shard?.count ?? 1);
    },
});
//# sourceMappingURL=shardCount.js.map