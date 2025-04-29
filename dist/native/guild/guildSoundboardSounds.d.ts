import { ArgType, NativeFunction } from "../../structures";
import { SoundboardSoundProperty } from "../../properties/sound";
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
    enum: typeof SoundboardSoundProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=guildSoundboardSounds.d.ts.map