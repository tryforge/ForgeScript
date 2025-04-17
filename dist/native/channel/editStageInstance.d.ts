import { StageInstancePrivacyLevel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.StageInstance;
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
    enum: typeof StageInstancePrivacyLevel;
}], true>;
export default _default;
//# sourceMappingURL=editStageInstance.d.ts.map