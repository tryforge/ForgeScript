"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$createInvite",
    version: "1.0.0",
    brackets: true,
    description: "Creates an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to make the invite for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => !i.isDMBased(),
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating this invite",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx, [ch, maxUses, reason]) {
        const channel = (ch ?? ctx.channel);
        const invite = await channel
            .createInvite({
            reason: reason || undefined,
            maxUses: maxUses || undefined,
        })
            .catch(noop_1.default);
        return this.success(invite ? invite.code : undefined);
    },
});
//# sourceMappingURL=createInvite.js.map