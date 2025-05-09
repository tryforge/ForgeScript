"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberProperties = exports.TeamMemberProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var TeamMemberProperty;
(function (TeamMemberProperty) {
    TeamMemberProperty["id"] = "id";
    TeamMemberProperty["role"] = "role";
    TeamMemberProperty["membership"] = "membership";
})(TeamMemberProperty || (exports.TeamMemberProperty = TeamMemberProperty = {}));
exports.TeamMemberProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    role: (i) => Object.entries(discord_js_1.TeamMemberRole).find(([, x]) => x === i?.role)?.[0],
    membership: (i) => discord_js_1.TeamMemberMembershipState[i?.membershipState]
});
//# sourceMappingURL=teamMember.js.map