import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: true;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}], true>;
export default _default;
//# sourceMappingURL=deleteChannels.d.ts.map