"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$deleteChannels",
    version: "1.0.5",
    brackets: true,
    unwrap: true,
    description: "Delete given channel ids, returns the count of channels deleted",
    args: [
        {
            name: "channels",
            description: "The channels to delete",
            rest: true,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => "delete" in i,
        },
    ],
    async execute(_, [channels]) {
        let count = 0;
        for (let i = 0, len = channels.length; i < len; i++) {
            const ch = channels[i];
            const success = await ch.delete().catch(noop_1.default);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteChannels.js.map