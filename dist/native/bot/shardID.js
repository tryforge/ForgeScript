"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$shardID",
    version: "1.0.0",
    aliases: [
        "$botShardIDs",
        "$clientShardIDs"
    ],
    description: "Returns the shard id of the client",
    unwrap: false,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.runtime.extras ?? ctx.client.shard?.ids.join(", "));
    },
});
//# sourceMappingURL=shardID.js.map