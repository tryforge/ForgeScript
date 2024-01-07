import { ArgType, NativeFunction } from "../../structures";
import { BaseChannel } from "discord.js";
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
    type: ArgType.Number;
    required: true;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=setVoiceUserLimit.d.ts.map