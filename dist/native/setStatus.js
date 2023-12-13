"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setStatus",
    version: "1.0.0",
    description: "Sets the client's status",
    unwrap: true,
    args: [
        {
            name: "presence",
            description: "The presence status",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "type",
            description: "The activity type",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.ActivityType,
            required: true,
        },
        {
            name: "name",
            description: "The status name",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "state",
            description: "The status state",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "url",
            description: "The url to use for the stream",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [status, type, name, state, url]) {
        ctx.client.user.setPresence({
            activities: [
                {
                    name,
                    state: state || undefined,
                    type,
                    url: url || undefined,
                },
            ],
            status: status,
        });
        return this.success();
    },
});
//# sourceMappingURL=setStatus.js.map