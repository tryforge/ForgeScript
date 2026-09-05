import { BaseChannel, ThreadAutoArchiveDuration, ThreadOnlyChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is ThreadOnlyChannel;
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
//# sourceMappingURL=setDefaultThreadArchiveDuration.d.ts.map