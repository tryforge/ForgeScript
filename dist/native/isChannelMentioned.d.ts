import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    description: string;
    check: (i: BaseChannel) => boolean;
    required: true;
    type: ArgType.Channel;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Message;
    pointer: number;
    description: string;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    description: string;
}], true>;
export default _default;
//# sourceMappingURL=isChannelMentioned.d.ts.map