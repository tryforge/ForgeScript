import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    check: (i: BaseChannel) => i is BaseChannel & Record<"setNSFW", unknown>;
    type: ArgType.Channel;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}], true>;
export default _default;
//# sourceMappingURL=setChannelNSFW.d.ts.map