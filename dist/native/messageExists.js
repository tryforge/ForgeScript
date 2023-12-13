"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$messageExists",
    version: "1.0.5",
    description: "Returns whether given message id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            description: "The channel to get the message from",
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to check for",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    async execute(_, [ch, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && !!(await ch.messages.fetch(id).catch(noop_1.default)));
    },
});
//# sourceMappingURL=messageExists.js.map