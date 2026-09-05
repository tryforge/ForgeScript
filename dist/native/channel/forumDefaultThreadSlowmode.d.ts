import { BaseChannel, ThreadOnlyChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is ThreadOnlyChannel;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=forumDefaultThreadSlowmode.d.ts.map