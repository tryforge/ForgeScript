/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { EnumLike } from "../structures"

export type Properties<Enum extends EnumLike, Type> = {
    [P in keyof Enum]: (v?: Type | null, sep?: string | null, index?: number | null) => null | undefined | string | number | boolean
}

export default function defineProperties<Enum extends EnumLike, Type>(props: Properties<Enum, Type>) {
    return props
}
