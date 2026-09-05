/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

export default function(v: string) {
    return Number(v.replace(/\./g, ""))
}