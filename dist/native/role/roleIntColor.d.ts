import { ArgType, NativeFunction } from "../../structures";
import { RoleColor } from "./roleColor";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Role;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof RoleColor;
}], true, false>;
export default _default;
//# sourceMappingURL=roleIntColor.d.ts.map