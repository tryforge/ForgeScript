import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
    required: true;
}, {
    name: string;
    pointer: number;
    description: string;
    rest: false;
    type: ArgType.Member;
    required: true;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.Role;
    pointer: number;
}], true>;
export default _default;
//# sourceMappingURL=memberRemoveRoles.d.ts.map