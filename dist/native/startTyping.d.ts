import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=startTyping.d.ts.map