import { ReturnType } from "./Return"

export class Output<R extends [...ReturnType[]]> {
    public constructor(
        public readonly types: R
    ) {

    }
}