"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceRegionType = void 0;
const structures_1 = require("../../structures");
var VoiceRegionType;
(function (VoiceRegionType) {
    VoiceRegionType["brazil"] = "brazil";
    VoiceRegionType["hongkong"] = "hongkong";
    VoiceRegionType["india"] = "india";
    VoiceRegionType["japan"] = "japan";
    VoiceRegionType["rotterdam"] = "rotterdam";
    VoiceRegionType["russia"] = "russia";
    VoiceRegionType["singapore"] = "singapore";
    VoiceRegionType["south-korea"] = "south-korea";
    VoiceRegionType["southafrica"] = "southafrica";
    VoiceRegionType["sydney"] = "sydney";
    VoiceRegionType["us-central"] = "us-central";
    VoiceRegionType["us-east"] = "us-east";
    VoiceRegionType["us-south"] = "us-south";
    VoiceRegionType["us-west"] = "us-west";
})(VoiceRegionType || (exports.VoiceRegionType = VoiceRegionType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$setVoiceRegion",
    version: "1.5.0",
    description: "Sets the region of a voice channel, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to set region",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isVoiceBased()
        },
        {
            name: "region",
            description: "The region to set, leave empty to remove a fixed region",
            rest: false,
            required: false,
            type: structures_1.ArgType.Enum,
            enum: VoiceRegionType
        },
        {
            name: "reason",
            description: "Reason to set the voice region",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [voice, region, reason]) {
        return this.success(!!(await voice.setRTCRegion(region || null, reason ?? undefined).catch(ctx.noop)));
    },
});
//# sourceMappingURL=setVoiceRegion.js.map