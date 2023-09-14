"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomGuildID",
    version: "1.0.3",
    description: "Returns a random guild ID",
    unwrap: false,
    execute(ctx) {
        return structures_1.Return.success(ctx.client.guilds.cache.randomKey());
    },
});
//# sourceMappingURL=randomGuildID.js.map