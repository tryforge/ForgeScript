import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
    description: string;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    pointer: number;
    pointerProperty: string;
    type: ArgType.RoleOrUser;
}, {
    name: string;
    rest: true;
    required: true;
    type: ArgType.OverwritePermission;
    description: string;
    enum: any;
}], true>;
export default _default;
//# sourceMappingURL=modifyChannelPerms.d.ts.map