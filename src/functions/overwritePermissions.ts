/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import type { OverwriteData, PermissionResolvable } from "discord.js"
import type { OverwritePermission } from "../structures"

export function overwritePermissionsArrayToObject(arr: OverwritePermission[]) {
    const obj: Partial<Record<OverwritePermission["permission"], OverwritePermission["value"]>> = {}
    for (let i = 0, len = arr.length; i < len; i++) {
        const data = arr[i]
        obj[data.permission] = data.value
    }

    return obj
}

export function overwritePermissionsToOverwriteData(id: string, arr: OverwritePermission[]): OverwriteData {
    const allow: PermissionResolvable[] = []
    const deny: PermissionResolvable[] = []

    for (const perm of arr) {
        if (perm.value === true) {
            allow.push(perm.permission)
        } else if (perm.value === false) {
            deny.push(perm.permission)
        }
    }

    return { id, allow, deny }
}