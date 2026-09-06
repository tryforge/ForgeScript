/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

export const PrimitiveNumberRegex = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/

export const QuotedStringRegex = /^"[^"]*"$/

export default function parsePrimitive(str: unknown) {
    if (typeof str !== "string") return str

    if (QuotedStringRegex.test(str)) {
        try {
            return JSON.parse(str) as string
        } catch (error) {
            return str.slice(1, -1)
        }
    }

    if (str === "true") return true
    else if (str === "false") return false

    if (PrimitiveNumberRegex.test(str)) {
        const n = Number(str)
        if (Number.isFinite(n) && (!Number.isInteger(n) || Number.isSafeInteger(n))) return n
    }

    return str
}