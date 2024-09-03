import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { ComponentProperty } from "../../properties/component";
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
    required: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ComponentProperty;
    required: false;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getComponents.d.ts.map