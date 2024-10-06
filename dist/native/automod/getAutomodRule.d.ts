import { ArgType, NativeFunction } from "../../structures";
import { AutomodRuleProperty } from "../../properties/automodRule";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.AutomodRule;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof AutomodRuleProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getAutomodRule.d.ts.map