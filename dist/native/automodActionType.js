"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodActionType",
    version: "1.2.0",
    description: "The action type automod used",
    unwrap: false,
    execute(ctx) {
        const type = ctx.automod?.action.type;
        return this.success(type ? discord_js_1.AutoModerationActionType[type] : null);
    },
});
//# sourceMappingURL=automodActionType.js.map