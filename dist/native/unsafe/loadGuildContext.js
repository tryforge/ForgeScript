"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadGuildContext",
    version: "1.4.0",
    aliases: [
        "$useGuildContext",
        "$asGuildContext"
    ],
    brackets: true,
    description: "Loads a guild instance to the current context, this is not reversible and is adviced to use with $scope.",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to adapt context with",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        }
    ],
    execute(ctx, [g]) {
        ctx.obj = g;
        return this.success();
    },
});
//# sourceMappingURL=loadGuildContext.js.map