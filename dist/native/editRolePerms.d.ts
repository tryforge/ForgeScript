import { ArgType, NativeFunction } from "../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    pointer: number;
    type: ArgType.Role;
    description: string;
    rest: false;
    required: true;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.Permission;
    required: true;
}], true>;
export default _default;
//# sourceMappingURL=editRolePerms.d.ts.map