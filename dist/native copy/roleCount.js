"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$roleCount",
    version: "1.0.0",
    description: "Returns the role count of all servers",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.client.guilds.cache.reduce((x, y) => x + y.roles.cache.size, 0));
    },
});
//# sourceMappingURL=roleCount.js.map