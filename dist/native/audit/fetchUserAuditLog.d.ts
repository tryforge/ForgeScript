import { AuditLogEvent } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { AuditProperty } from "../../properties/audit";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    rest: false;
    description: string;
    type: ArgType.User;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AuditLogEvent;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AuditProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    type: ArgType.String;
    rest: false;
}], true>;
export default _default;
//# sourceMappingURL=fetchUserAuditLog.d.ts.map