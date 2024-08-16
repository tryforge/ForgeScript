import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { ForumTagProperty } from "../../properties/forumTag";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ForumTagProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=forumTags.d.ts.map