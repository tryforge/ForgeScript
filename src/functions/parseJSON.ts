/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

export const JSONStartRegex = /^[[{]/
export const JSONEndRegex = /^[\]}]/
export const JSONNumberRegex = /^\d+$/

export default function parseJSON(str: unknown, parseNull = true) {
    if (typeof str !== "string" || (!parseNull && str === "null"))
        return str

    try {
        return JSONNumberRegex.test(str) ? Number(str) : JSON.parse(str)
    } catch (error) {
        return str
    }
}