import { PermissionsString } from "discord.js"
import { OverwritePermission } from "../structures"

export default function(arr: OverwritePermission[]) {
    const obj: Partial<Record<OverwritePermission["permission"], OverwritePermission["value"]>> = {}
    for (let i = 0, len = arr.length;i < len;i++) {
        const data = arr[i]
        obj[data.permission] = data.value
    }

    return obj
}