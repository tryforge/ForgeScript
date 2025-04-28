"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$poll",
    version: "1.5.0",
    description: "Creates a poll",
    brackets: true,
    args: [
        {
            name: "question",
            description: "The poll question",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "duration",
            description: "The poll's duration",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time
        },
        {
            name: "multiselect",
            description: "Whether to allow multi select",
            rest: false,
            type: structures_1.ArgType.Boolean
        },
        {
            name: "layout",
            description: "The layout for this poll",
            rest: false,
            enum: discord_js_1.PollLayoutType,
            type: structures_1.ArgType.Enum
        },
    ],
    unwrap: true,
    execute(ctx, [q, dur, multi, layout]) {
        ctx.container.poll = {
            answers: [],
            allowMultiselect: multi || false,
            duration: dur / 1000 / 60 / 60,
            question: { text: q },
            layoutType: layout || undefined
        };
        return this.success();
    }
});
//# sourceMappingURL=poll.js.map