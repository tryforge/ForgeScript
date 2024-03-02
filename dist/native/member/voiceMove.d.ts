import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Member;
    pointer: number;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=voiceMove.d.ts.map