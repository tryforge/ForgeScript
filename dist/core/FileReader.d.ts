import { BaseCommand, IBaseCommand } from "../structures";
export declare class FileReader {
    private readonly code;
    private readonly req;
    static readonly Syntax: {
        Open: string;
        Close: string;
        Escape: string;
    };
    private index;
    constructor(code: string, req: any);
    static read(fsPath: string, reqPath: string): IBaseCommand<any> | BaseCommand<any> | (IBaseCommand<any> | BaseCommand<any>)[];
    read(): IBaseCommand<any> | BaseCommand<any> | (IBaseCommand<any> | BaseCommand<any>)[];
    private parseProperty;
    private readValue;
    private readName;
    private char;
}
//# sourceMappingURL=FileReader.d.ts.map