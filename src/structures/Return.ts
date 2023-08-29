import { inspect } from "util"
import { ForgeError } from "./ForgeError"

export enum ReturnType {
    Error,
    Stop,
    Success,
    Return
}

export type ReturnValue<T extends ReturnType> =
    T extends ReturnType.Error ? ForgeError :
    T extends ReturnType.Return ? string :
    T extends ReturnType.Success ? unknown : 
    T extends ReturnType.Stop ? null : 
    never

export class Return<T extends ReturnType = ReturnType> {
    constructor(public readonly type: T, public readonly value: ReturnValue<T>) {}

    public static return(value: ReturnValue<ReturnType.Return>) {
        return new this(ReturnType.Return, value)
    }

    public static error(value: ReturnValue<ReturnType.Error>) {
        return new this(ReturnType.Error, value)
    }

    public static stop() {
        return new this(ReturnType.Stop, null)
    }

    public static successJSON(value: Return<ReturnType.Success>) {
        return this.success(
            typeof value !== "string" ? JSON.stringify(value, undefined, 4) : value
        )
    }

    public static successFormatted(value: Return<ReturnType.Success>) {
        return this.success(
            typeof value !== "string" ? 
                inspect(value, { depth: Infinity }) : 
                value
        )
    }

    public static success(value: ReturnValue<ReturnType.Success> = null) {
        return new this(ReturnType.Success, value)
    }

    public get error() {
        return this.type === ReturnType.Error
    }

    public get stop() {
        return this.type === ReturnType.Stop
    }

    public get return() {
        return this.type === ReturnType.Return
    }

    public get success() {
        return this.type === ReturnType.Success
    }
}