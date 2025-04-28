import { StageProperty } from "../../properties/stage";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.StageInstance;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof StageProperty;
}], true>;
export default _default;
//# sourceMappingURL=getStageInstance.d.ts.map