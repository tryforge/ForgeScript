"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodAction",
    version: "1.5.0",
    description: "Sets a new action for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The type of the automod rule action",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.AutoModerationActionType
        },
        {
            name: "channel ID",
            description: "The channel to which content will be logged",
            rest: false,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "duration",
            description: "The timeout duration in seconds",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "message",
            description: "The custom message that is shown whenever a message is blocked",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [type, channel, duration, message]) {
        const action = {
            type: type,
            metadata: {
                channel: channel,
                customMessage: message,
                durationSeconds: duration
            }
        };
        ctx.automodRule.actions ??= [];
        ctx.automodRule.actions.push(action);
        return this.success();
    },
});
//# sourceMappingURL=setAutomodAction.js.map