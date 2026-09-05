import { BaseChannel, ThreadOnlyChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is ThreadOnlyChannel;
}, {
    name: string;
    description: string;
    rest: true;
    required: true;
    type: ArgType.ForumTag;
    pointer: number;
}], true>;
export default _default;
//# sourceMappingURL=deleteForumTags.d.ts.map