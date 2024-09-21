import { ArgType, NativeFunction } from "../../structures";
import { ActivityProperty } from "../../properties/activity";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Member;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ActivityProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=memberActivity.d.ts.map