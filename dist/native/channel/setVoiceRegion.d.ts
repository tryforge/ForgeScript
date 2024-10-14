import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
export declare enum VoiceRegionType {
    brazil = "brazil",
    hongkong = "hongkong",
    india = "india",
    japan = "japan",
    rotterdam = "rotterdam",
    russia = "russia",
    singapore = "singapore",
    "south-korea" = "south-korea",
    southafrica = "southafrica",
    sydney = "sydney",
    "us-central" = "us-central",
    "us-east" = "us-east",
    "us-south" = "us-south",
    "us-west" = "us-west"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Enum;
    enum: typeof VoiceRegionType;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setVoiceRegion.d.ts.map