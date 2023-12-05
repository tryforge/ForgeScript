import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Channel;
    rest: false;
    required: true;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    pointer: number;
    rest: false;
    required: true;
    type: ArgType.Message;
    description: string;
}], true>;
export default _default;
//# sourceMappingURL=hasEmbeds.d.ts.map