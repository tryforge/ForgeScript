"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../functions/noop"));
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot owner id",
    unwrap: true,
    async execute(ctx) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(noop_1.default);
        return structures_1.Return.success(ctx.client.application.owner?.id);
    }
});
//# sourceMappingURL=botOwnerID.js.map