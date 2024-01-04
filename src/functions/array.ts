import { ArgType } from "../structures"

export default function<T extends ArgType>(value?: any) {
    return value ?? null
}