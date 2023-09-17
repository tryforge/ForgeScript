import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => any;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.String;
    required: true;
    enum: any;
}], true>;
export default _default;
//# sourceMappingURL=addChannelPerms.d.ts.map