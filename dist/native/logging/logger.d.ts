import { ArgType, NativeFunction } from "../../structures";
import { LogType } from "../../structures/@internal/Logger";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    enum: typeof LogType;
    type: ArgType.Enum;
    required: true;
    rest: false;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=logger.d.ts.map