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
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").AnyThreadChannel;
}, {
    name: string;
    pointer: number;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Member;
}], true>;
export default _default;
//# sourceMappingURL=addThreadMember.d.ts.map