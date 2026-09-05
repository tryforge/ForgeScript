import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { ForumTagProperty } from "../../properties/forumTag";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").ThreadOnlyChannel;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.ForumTag;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ForumTagProperty;
}], true>;
export default _default;
//# sourceMappingURL=getForumTag.d.ts.map