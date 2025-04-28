"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuild",
    version: "1.5.0",
    description: "Deletes a guild, returns bool",
    aliases: [
        "$deleteServer"
    ],
    unwrap: true,
    brackets: true,
    deprecated: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild]) {
        return this.success((await guild?.delete().catch(() => false)) !== false);
    },
});
//# sourceMappingURL=deleteGuild.js.map