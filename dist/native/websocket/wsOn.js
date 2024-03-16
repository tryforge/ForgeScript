"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseJSON_1 = __importDefault(require("../../functions/parseJSON"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$wsOn",
    version: "1.5.0",
    description: "Attach a listener to a websocket",
    unwrap: false,
    aliases: [
        "$websocketOn"
    ],
    brackets: true,
    args: [
        {
            name: "websocket ID",
            description: "The id of the websocket to attach this listener to",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "listener name",
            description: "The name of the event to listen to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "callback",
            description: "The code to execute every time this event is fired",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "params",
            description: "The arguments that will contain the data of the event that was sent",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    async execute(ctx) {
        const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 0, 1, 3);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [id, listener, params] = args;
        const ws = ctx.client.websockets.get(id);
        const code = this.data.fields[2];
        if (ws) {
            ws.on(listener, async (...args) => {
                for (let i = 0, len = args.length; i < len; i++) {
                    const arg = args[i];
                    const param = params[i];
                    if (!param)
                        break;
                    ctx.setEnvironmentKey(param, arg instanceof Buffer ? (0, parseJSON_1.default)(arg.toString("utf-8")) : arg);
                }
                // We cannot stop this...
                await this["resolveCode"](ctx, code);
            });
        }
        return this.success();
    },
});
//# sourceMappingURL=wsOn.js.map