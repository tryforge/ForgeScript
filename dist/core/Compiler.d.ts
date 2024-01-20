import { CompiledFunction } from "../structures/@internal/CompiledFunction";
export interface IRawField {
    condition?: boolean;
    rest?: boolean;
}
export interface IRawFunctionFieldDefinition {
    required: boolean;
    fields: IRawField[];
}
export interface IRawFunction {
    aliases: null | string[];
    name: string;
    /**
     * If undefined, function has no fields.
     * If present and required true, fields are required.
     * If false, fields are not required.
     */
    args: IRawFunctionFieldDefinition | null;
}
export type WrappedCode = (args: unknown[]) => string;
export type WrappedConditionCode = (lhs: unknown, rhs: unknown) => boolean;
export interface ICompiledFunctionField {
    value: string;
    functions: ICompiledFunction[];
    resolve: WrappedCode;
}
export declare enum OperatorType {
    Eq = "==",
    NotEq = "!=",
    Lte = "<=",
    Gte = ">=",
    Gt = ">",
    Lt = "<",
    None = "unknown"
}
export declare const Operators: Set<OperatorType>;
export declare const Conditions: Record<OperatorType, WrappedConditionCode>;
export interface ICompiledFunctionConditionField {
    op: OperatorType;
    lhs: ICompiledFunctionField;
    rhs?: ICompiledFunctionField;
    resolve: WrappedConditionCode;
}
export interface ILocation {
    line: number;
    column: number;
}
export interface ICompiledFunction {
    index: number;
    id: string;
    name: string;
    /**
     * Whether output is not desirable
     */
    negated: boolean;
    fields: null | (ICompiledFunctionField | ICompiledFunctionConditionField)[];
}
export interface ICompilationResult {
    code: string;
    functions: ICompiledFunction[];
    resolve: WrappedCode;
}
export interface IExtendedCompilationResult extends Omit<ICompilationResult, "functions"> {
    functions: CompiledFunction[];
}
export interface IRawFunctionMatch {
    index: number;
    length: number;
    negated: boolean;
    fn: IRawFunction;
}
/**
 * REWRITE NEEDED
 */
export declare class Compiler {
    private readonly path?;
    private readonly code?;
    static Syntax: {
        Open: string;
        Close: string;
        Escape: string;
        Negation: string;
        Separator: string;
    };
    private static SystemRegex;
    private static Regex;
    private static InvalidCharRegex;
    private static Functions;
    private static EscapeRegex;
    private id;
    private matches;
    private matchIndex;
    private index;
    private outputFunctions;
    private outputCode;
    private constructor();
    compile(): ICompilationResult;
    private parseFunction;
    private getCharInfo;
    private parseFieldMatch;
    private processEscape;
    private parseConditionField;
    private parseNormalField;
    private parseAnyField;
    private prepareFunction;
    private skip;
    private skipIf;
    private get match();
    private getFunction;
    private error;
    private locate;
    private back;
    private wrapCondition;
    private wrap;
    private moveTo;
    private getNextId;
    private char;
    private peek;
    private next;
    private static setFunctions;
    static compile(code?: string, path?: string | null): IExtendedCompilationResult;
    static setSyntax(syntax: typeof this.Syntax): void;
}
//# sourceMappingURL=Compiler.d.ts.map