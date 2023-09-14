import { ArgType, NativeFunction } from "../structures";
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
    type: ArgType.Member;
    pointer: number;
    required: true;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.Role;
    pointer: number;
}], true>;
export default _default;
//# sourceMappingURL=memberSetRoles.d.ts.map