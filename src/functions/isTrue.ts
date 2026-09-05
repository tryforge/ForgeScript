/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Return } from "../structures"

export default function(t: Return) {
    return t.value === "true" || t.value === true
}