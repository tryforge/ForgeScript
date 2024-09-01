import { ArgType, NativeFunction } from "../../structures";
import { ChannelProperty } from "../../properties/channel";
export declare enum SearchMethodType {
    startsWith = 0,
    endsWith = 1,
    includes = 2
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.Guild;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ChannelProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof SearchMethodType;
}], true>;
export default _default;
//# sourceMappingURL=findChannels.d.ts.map