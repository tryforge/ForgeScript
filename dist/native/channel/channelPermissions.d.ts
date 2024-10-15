import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { PermissionOverwritesProperty } from "../../properties/permissionOverwrites";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Channel;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof PermissionOverwritesProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=channelPermissions.d.ts.map