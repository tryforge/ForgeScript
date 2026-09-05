/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

export function ordinal(i: number) {
    const j = i % 10,
        k = i % 100
    if (j == 1 && k !== 11) {
        return i + "st"
    }
    if (j == 2 && k !== 12) {
        return i + "nd"
    }
    if (j == 3 && k !== 13) {
        return i + "rd"
    }
    return i + "th"
}