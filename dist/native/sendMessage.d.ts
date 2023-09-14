import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    type: ArgType.Channel;
    rest: false;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}], true>;
export default _default;
//# sourceMappingURL=sendMessage.d.ts.map