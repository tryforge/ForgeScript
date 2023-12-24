"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botCount",
    version: "1.0.0",
    description: "Returns the bot count of the bot",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.client.users.cache.filter((x) => x.bot).size);
    },
});
//# sourceMappingURL=botCount.js.map