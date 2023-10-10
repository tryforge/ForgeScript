import { TextBasedChannel } from "discord.js";
import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: TextBasedChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Message;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    required: true;
    pointer: number;
    rest: false;
    type: ArgType.Reaction;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getMessageReactionUsers.d.ts.map