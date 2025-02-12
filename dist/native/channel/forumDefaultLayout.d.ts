import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=forumDefaultLayout.d.ts.map