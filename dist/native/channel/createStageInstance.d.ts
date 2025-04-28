import { BaseChannel, StageInstancePrivacyLevel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
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
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof StageInstancePrivacyLevel;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.ScheduledEvent;
    pointer: number;
    pointerProperty: string;
}], true>;
export default _default;
//# sourceMappingURL=createStageInstance.d.ts.map