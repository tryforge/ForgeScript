"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.overwritePermissionsArrayToObject = overwritePermissionsArrayToObject;
exports.overwritePermissionsToOverwriteData = overwritePermissionsToOverwriteData;
function overwritePermissionsArrayToObject(arr) {
    const obj = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        const data = arr[i];
        obj[data.permission] = data.value;
    }
    return obj;
}
function overwritePermissionsToOverwriteData(id, arr) {
    const allow = [];
    const deny = [];
    for (const perm of arr) {
        if (perm.value === true) {
            allow.push(perm.permission);
        }
        else if (perm.value === false) {
            deny.push(perm.permission);
        }
    }
    return { id, allow, deny };
}
//# sourceMappingURL=overwritePermissions.js.map