"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$shardStatus",
    version: "2.1.0",
    aliases: [
        "$botShardStatus",
        "$clientShardStatus"
    ],
    description: "Returns the shard status of the client",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every status",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(discord_js_1.Status),
    execute(ctx, [sep]) {
        return this.success(ctx.client.ws.shards.map(shard => discord_js_1.Status[shard.status]).join(sep ?? ", "));
    },
});
//# sourceMappingURL=shardStatus.js.map