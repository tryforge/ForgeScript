import { Locale } from "discord.js";
import { IArg, IEvent, INativeFunction } from "../structures";
export interface IBaseTranslateOptions {
    languages: (Locale | string)[];
    functions: INativeFunction<IArg[]>[];
    events: IEvent<unknown, keyof unknown>[];
}
export interface ITranslateEventOutput {
    description: string;
    descriptionHash: string;
}
export interface ITranslateFunctionOutput {
    description: string;
    descriptionHash: string;
    fields: {
        name: string;
        nameHash: string;
        description: string;
        descriptionHash: string;
    }[];
}
export interface ITranslateOutput {
    functions: Record<string, ITranslateFunctionOutput>;
    events: Record<string, ITranslateEventOutput>;
}
export declare function translateData(options: IBaseTranslateOptions): Promise<void>;
//# sourceMappingURL=translate.d.ts.map