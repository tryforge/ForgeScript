"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const voiceEffect_1 = require("../../properties/voiceEffect");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$effect",
    version: "2.3.0",
    description: "Retrieves data from an event whose context was a voice channel effect event",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: voiceEffect_1.VoiceEffectProperty,
            required: true,
        },
    ],
    execute(ctx, [prop]) {
        return this.success(voiceEffect_1.VoiceEffectProperties[prop](ctx.states?.voiceEffect?.new));
    },
});
//# sourceMappingURL=effect.js.map