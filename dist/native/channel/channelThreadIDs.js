"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$channelThreadIDs",
    version: "2.5.0",
    description: "Returns the thread ids of a channel",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to get its threads",
            rest: false,
            type: structures_1.ArgType.Channel,
            required: true,
            check: (i) => "threads" in i
        },
        {
            name: "separator",
            description: "The separator to use for every thread",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: (0, array_1.default)(),
    execute(ctx, [channel, sep]) {
        const chan = channel ?? ctx.channel;
        return this.success("threads" in chan ? chan.threads.cache.map((x) => x.id).join(sep ?? ", ") : null);
    },
});
//# sourceMappingURL=channelThreadIDs.js.map