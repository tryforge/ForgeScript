"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadChannelContext",
    version: "1.4.0",
    aliases: [
        "$useChannelContext",
        "$asChannelContext"
    ],
    brackets: true,
    description: "Loads a channel instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel
        }
    ],
    execute(ctx, [ch]) {
        ctx.obj = ch;
        return this.success();
    },
});
//# sourceMappingURL=loadChannelContext.js.map