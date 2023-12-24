"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const noop_1 = __importDefault(require("../functions/noop"));
exports.default = new structures_1.NativeFunction({
    name: "$deleteRoles",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given role ids, returns the count of roles deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete roles from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "roles",
            description: "The roles to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: structures_1.ArgType.Role,
        },
    ],
    async execute(_, [, roles]) {
        let count = 0;
        for (let i = 0, len = roles.length; i < len; i++) {
            const role = roles[i];
            const success = await role.delete().catch(noop_1.default);
            if (success)
                count++;
        }
        return this.success(count);
    },
});
//# sourceMappingURL=deleteRoles.js.map