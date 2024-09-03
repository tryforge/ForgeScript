import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { EmbedProperty } from "../../properties/embed";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Message;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    required: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof EmbedProperty;
    required: false;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}], true>;
export default _default;
//# sourceMappingURL=getEmbeds.d.ts.map