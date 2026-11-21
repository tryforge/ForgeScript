import { ArgType, NativeFunction } from "../../structures";
import { ScheduledEventProperty } from "../../properties/scheduledEvent";
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
    enum: typeof ScheduledEventProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true, false>;
export default _default;
//# sourceMappingURL=guildScheduledEvents.d.ts.map