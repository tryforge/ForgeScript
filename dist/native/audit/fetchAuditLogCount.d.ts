import { AuditLogEvent } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof AuditLogEvent;
}, {
    name: string;
    rest: false;
    description: string;
    type: ArgType.User;
}], true>;
export default _default;
//# sourceMappingURL=fetchAuditLogCount.d.ts.map