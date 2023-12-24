"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodChannelID",
    version: "1.2.0",
    description: "The channel id for automod",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.channelId);
    },
});
//# sourceMappingURL=automodChannelID.js.map