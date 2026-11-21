import { GuildScheduledEventEntityType } from "discord.js";
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
    type: ArgType.ScheduledEvent;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof GuildScheduledEventEntityType;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Date;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Date;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.URL;
}], true, true>;
export default _default;
//# sourceMappingURL=editScheduledEvent.d.ts.map