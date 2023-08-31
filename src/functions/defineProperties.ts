import { VoiceState } from "discord.js"
import { EnumLike, GetEnum } from "../structures"

export type Properties<Enum extends EnumLike, Type> = {
    [P in keyof Enum]: (v?: Type | null, sep?: string | null) => null | undefined | string | number | boolean
}

export default function defineProperties<Enum extends EnumLike, Type>(props: Properties<Enum, Type>) {
    return props
}