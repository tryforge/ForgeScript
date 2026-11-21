import { InviteProperty } from "../../properties/invite";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
    description: string;
}, {
    name: string;
    rest: false;
    type: ArgType.Enum;
    description: string;
    enum: typeof InviteProperty;
}, {
    name: string;
    rest: false;
    type: ArgType.String;
    description: string;
}], true, false>;
export default _default;
//# sourceMappingURL=guildInvites.d.ts.map