import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => i is import("discord.js").AnyThreadChannel<boolean>;
    description: string;
}, {
    name: string;
    description: string;
    rest: true;
    required: true;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=modifyForumTags.d.ts.map