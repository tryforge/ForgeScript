import { BaseChannel, ThreadAutoArchiveDuration } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    description: string;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    enum: typeof ThreadAutoArchiveDuration;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setChannelArchiveDuration.d.ts.map