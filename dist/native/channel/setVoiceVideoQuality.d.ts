import { ArgType, NativeFunction } from "../../structures";
import { BaseChannel, VideoQualityMode } from "discord.js";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof VideoQualityMode;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setVoiceVideoQuality.d.ts.map