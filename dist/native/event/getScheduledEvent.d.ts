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
    required: true;
    type: ArgType.ScheduledEvent;
    pointer: number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof ScheduledEventProperty;
}], true, false>;
export default _default;
//# sourceMappingURL=getScheduledEvent.d.ts.map