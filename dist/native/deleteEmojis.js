"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$deleteEmojis",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given emoji ids, returns the count of emotes deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete emotes from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "emojis",
            description: "The emojis to delete",
            rest: true,
            pointer: 0,
            required: true,
            type: structures_1.ArgType.GuildEmoji,
        },
    ],
    async execute(_, [, emotes]) {
        let count = 0;
        for (let i = 0, len = emotes.length; i < len; i++) {
            const emote = emotes[i];
            const success = await emote.delete().catch(noop_1.default);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteEmojis.js.map