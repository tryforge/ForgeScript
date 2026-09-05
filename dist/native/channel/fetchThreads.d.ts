import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    required: true;
    check: (i: BaseChannel) => i is BaseChannel & Record<"threads", unknown>;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}], true>;
export default _default;
//# sourceMappingURL=fetchThreads.d.ts.map