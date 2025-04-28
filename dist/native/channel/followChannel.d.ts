import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Channel;
    rest: false;
    required: true;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    type: ArgType.Channel;
    rest: false;
    required: true;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
}], true>;
export default _default;
//# sourceMappingURL=followChannel.d.ts.map