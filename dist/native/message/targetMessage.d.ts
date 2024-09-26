import { ArgType, NativeFunction } from "../../structures";
import { MessageProperty } from "../../properties/message";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MessageProperty;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=targetMessage.d.ts.map