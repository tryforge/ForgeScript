import { ArgType, NativeFunction } from "../../structures";
export declare enum NicknameFonts {
    Bangers = 1,
    BioRhyme = 2,
    CherryBomb = 3,
    Chicle = 4,
    Compagnon = 5,
    MuseoModerno = 6,
    NeoCastel = 7,
    PixelifySans = 8,
    Ribes = 9,
    Sinistre = 10,
    Default = 11,
    ZillaSlab = 12
}
export declare enum NicknameEffects {
    Solid = 1,
    Gradient = 2,
    Neon = 3,
    Toon = 4,
    Pop = 5,
    Glow = 6
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Guild;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Enum;
    enum: typeof NicknameFonts;
}, {
    name: string;
    description: string;
    required: true;
    rest: false;
    type: ArgType.Enum;
    enum: typeof NicknameEffects;
}, {
    name: string;
    description: string;
    rest: true;
    type: ArgType.Color;
}], true>;
export default _default;
//# sourceMappingURL=setBotNicknameStyle.d.ts.map