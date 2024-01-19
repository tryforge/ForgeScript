"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadMessageContext",
    version: "1.4.0",
    aliases: [
        "$useMessageContext",
        "$asMessageContext"
    ],
    description: "Loads a message instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel
        },
        {
            name: "message ID",
            description: "The message to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0
        }
    ],
    execute(ctx, [, m]) {
        ctx.obj = m;
        return this.success();
    },
});
//# sourceMappingURL=loadMessageContext.js.map