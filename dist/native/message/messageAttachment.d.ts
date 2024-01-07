import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    description: string;
    type: ArgType.Channel;
    check: (i: BaseChannel) => any;
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
    type: ArgType.Number;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=messageAttachment.d.ts.map