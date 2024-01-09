"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionDelete",
    version: "1.4.0",
    description: "Deletes this interaction's reply",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction?.isRepliable())
            await ctx.interaction.deleteReply().catch(noop_1.default);
        return this.success();
    },
});
//# sourceMappingURL=interactionDelete.js.map