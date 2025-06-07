import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    pointer: number;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Message;
}, {
    name: string;
    rest: false;
    description: string;
    type: ArgType.String;
}, {
    name: string;
    rest: false;
    description: string;
    type: ArgType.Boolean;
}], true>;
export default _default;
//# sourceMappingURL=messageEmojis.d.ts.map