"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$createThread",
    version: "1.0.3",
    description: "Creates a thread, returns thread channel id on success",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the thread at",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => "threads" in i,
        },
        {
            name: "name",
            description: "The name for the thread",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "content",
            description: "The content to use for the starter message",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "message ID",
            description: "The message to start thread for",
            rest: false,
            pointer: 0,
            type: structures_1.ArgType.Message,
        },
    ],
    async execute(ctx, [channel, name, content]) {
        const ch = channel;
        ctx.container.content = content || undefined;
        const success = await ch.threads
            .create({
            name,
            startMessage: ctx.container.getOptions(),
        })
            .catch(noop_1.default);
        ctx.container.reset();
        return this.success(success ? success.id : undefined);
    },
});
//# sourceMappingURL=createThread.js.map