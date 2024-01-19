import { inspect } from "util"
import { ForgeError } from "../forge/ForgeError"

export enum ReturnType {
    Error,
    Stop,
    Success,
    Return,
    Break,
    Continue,
}

export type ReturnValue<T extends ReturnType> = T extends ReturnType.Error
    ? ForgeError
    : T extends ReturnType.Return
    ? string
    : T extends ReturnType.Success
    ? unknown
    : T extends ReturnType.Stop | ReturnType.Break | ReturnType.Continue
    ? null
    : never

export class Return<T extends ReturnType = ReturnType> {
    constructor(public readonly type: T, public readonly value: ReturnValue<T>) {}

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

    public get continue() {
        return this.type === ReturnType.Continue
    }

    public get break() {
        return this.type === ReturnType.Break
    }
}
