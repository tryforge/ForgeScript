"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editStageInstance",
    version: "2.3.0",
    description: "Edits a stage instance, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.StageInstance,
        },
        {
            name: "topic",
            description: "The new topic of the stage instance",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "privacy level",
            description: "The new privacy level of the stage instance",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.StageInstancePrivacyLevel
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [instance, topic, level]) {
        return this.success(!!(await instance.edit({ topic: topic || undefined, privacyLevel: level || undefined }).catch(ctx.noop)));
    },
});
//# sourceMappingURL=editStageInstance.js.map