"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$getThreadMembers",
    version: "1.0.0",
    description: "Gets thread members",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull members from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isThread(),
        },
        {
            name: "separator",
            description: "The separator for every id",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [channel, sep]) {
        const thread = channel;
        const success = await thread.members.fetch().catch(noop_1.default);
        return this.success(success && success.size ? success.map((x) => x.id).join(sep || ", ") : undefined);
    },
});
//# sourceMappingURL=getThreadMembers.js.map