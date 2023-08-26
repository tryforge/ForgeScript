import { User } from "discord.js"
import { CompiledFunction } from "./CompiledFunction"
import { Context } from "./Context"
import { Return } from "./Return"

export enum ArgType {
    String,
    Number,
    User,
    Json
}

export interface IArg<Type extends ArgType = ArgType, Required extends boolean = boolean, Rest extends boolean = boolean> {
    name: string
    description: string
    type: Type

    /**
     * Defaults to false
     */
    required?: Required

    /**
     * Whether this argument is an array of values
     */
    rest: Rest
}

export type NativeFunctionExecutor<T extends [...IArg[]], Unwrap extends boolean = boolean> = 
    Unwrap extends true ? 
        (this: CompiledFunction<T, Unwrap>, ctx: Context, args: UnwrapArgs<T>) => Promise<Return> | Return : 
        (this: CompiledFunction<T, Unwrap>, ctx: Context) => Promise<Return> | Return

export interface INativeFunction<T extends [...IArg[]], Unwrap extends boolean = boolean> {
    name: string
    description: string

    /**
     * Resolves all arguments and are passed through execute params.
     */
    unwrap: Unwrap
    args?: [...T]

    /**
     * If undefined, function has no brackets
     * If false, function can have brackets.
     * If true, function must have brackets.
     */
    brackets?: boolean
    execute: NativeFunctionExecutor<T, Unwrap>
}

export type MarkRest<T, B extends boolean> = B extends true ? T[] : T
export type GetArgType<T extends ArgType> = 
    T extends ArgType.Number ? 
        number : 
        T extends ArgType.String ?
            string :
            T extends ArgType.User ?
                User :
                T extends ArgType.Json ?
                    Record<string, unknown> :
                    null
   
export type MarkNullable<T, Req extends boolean, Rest extends boolean = boolean> = Rest extends true ? T : Req extends true ? T : T | null

export type UnwrapArg<T> = T extends IArg<infer Type, infer Required, infer Rest> ? MarkRest<MarkNullable<GetArgType<Type>, Required, Rest>, Rest> : never

export type UnwrapArgs<T> = T extends [ infer L, ...infer R ] ? [
    UnwrapArg<L>,
    ...UnwrapArgs<R>
] : []

export class NativeFunction<T extends [...IArg[]] = IArg[], Unwrap extends boolean = boolean> {
    public constructor(public readonly data: INativeFunction<T, Unwrap>) {}

    public get name() {
        return this.data.name
    }
}