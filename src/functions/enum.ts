import { EnumLike } from "../structures"

export function enumToArray(x: EnumLike) {
    return Object.keys(x).filter((x) => isNaN(Number(x)))
}