"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleColor = void 0;
const hex_1 = require("../../functions/hex");
const structures_1 = require("../../structures");
var RoleColor;
(function (RoleColor) {
    RoleColor["Primary"] = "primaryColor";
    RoleColor["Secondary"] = "secondaryColor";
    RoleColor["Tertiary"] = "tertiaryColor";
})(RoleColor || (exports.RoleColor = RoleColor = {}));
exports.default = new structures_1.NativeFunction({
    name: "$roleColor",
    version: "1.0.0",
    description: "Returns the color of a role",
    brackets: false,
    unwrap: true,
    output: structures_1.ArgType.Color,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull the role from",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
        },
        {
            name: "role ID",
            description: "The role to return its color",
            rest: false,
            type: structures_1.ArgType.Role,
            pointer: 0,
            required: true,
        },
        {
            name: "color",
            description: "The role color to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: RoleColor
        },
    ],
    execute(ctx, [, role, color]) {
        const int = (role ?? ctx.role)?.colors[color || RoleColor.Primary];
        return this.success(int ? "#" + (0, hex_1.int2hex)(int) : null);
    },
});
//# sourceMappingURL=roleColor.js.map