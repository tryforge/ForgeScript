import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    pointer: number;
    type: ArgType.Message;
}], true>;
export default _default;
//# sourceMappingURL=createThread.d.ts.map