"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$soundGuildID",
    version: "2.4.0",
    description: "Returns the guild id of a sound",
    unwrap: false,
    output: structures_1.ArgType.Guild,
    execute(ctx) {
        return this.success(ctx.sound?.guildId);
    },
});
//# sourceMappingURL=soundGuildID.js.map