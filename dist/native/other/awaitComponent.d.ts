import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Message;
    pointer: number;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    condition: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    rest: false;
    required: true;
    type: ArgType.Time;
    description: string;
}], false>;
export default _default;
//# sourceMappingURL=awaitComponent.d.ts.map