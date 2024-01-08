import { Locale } from "discord.js";
import { IArg, INativeFunction } from "../structures";
export interface IBaseTranslateOptions {
    languages: (Locale | string)[];
    outputFile: string;
}
export interface ITraslateFunctionOptions extends IBaseTranslateOptions {
    functions: INativeFunction<IArg[]>[];
}
export type ITranslateFunctionOutput = Record<Locale | string, {
    description: string;
    descriptionHash: string;
    fields: {
        name: string;
        nameHash: string;
        description: string;
        descriptionHash: string;
    }[];
}>;
export declare function translateFunctions(options: ITraslateFunctionOptions): Promise<void>;
//# sourceMappingURL=translate.d.ts.map