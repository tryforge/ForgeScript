import { ArgType, NativeFunction } from "../../structures";
export declare enum PresenceStatus {
    online = "online",
    idle = "idle",
    dnd = "dnd",
    offline = "offline",
    invisible = "invisible"
}
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
    type: ArgType.Enum;
    enum: typeof PresenceStatus;
}], true>;
export default _default;
//# sourceMappingURL=guildMemberCount.d.ts.map