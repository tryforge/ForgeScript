"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const fetchAllMessages_1 = __importDefault(require("../../functions/fetchAllMessages"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$transcript",
    version: "1.4.0",
    aliases: ["$channelTranscript", "$createTranscript"],
    description: "Creates a channel transcript",
    brackets: true,
    output: (0, array_1.default)(),
    unwrap: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to create transcript of",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "variable",
            description: "The $env variable name to load the message id to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "code",
            description: "The code to use for every message, make sure to use $return",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "full",
            description: "Whether to load entire message object to the variable",
            rest: false,
            required: false,
            type: structures_1.ArgType.Boolean,
        },
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3, 4);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [channel, varName, sep, full] = args;
        const code = this.data.fields[2];
        const msgs = await (0, fetchAllMessages_1.default)(channel);
        const results = new Array();
        for (let i = 0, len = msgs.length; i < len; i++) {
            const msg = msgs[i];
            ctx.setEnvironmentKey(varName, full ? msg : msg.id);
            const resolved = await this["resolveCode"](ctx, code);
            if (resolved.return)
                results.push(resolved.value);
            else if (!this["isValidReturnType"](resolved))
                return resolved;
        }
        return this.success(results.join(sep ?? ", "));
    },
});
//# sourceMappingURL=transcript.js.map