"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteProperties = exports.InviteProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var InviteProperty;
(function (InviteProperty) {
    InviteProperty["authorID"] = "authorID";
    InviteProperty["channelID"] = "channelID";
    InviteProperty["guildID"] = "guildID";
    InviteProperty["uses"] = "uses";
    InviteProperty["maxUses"] = "maxUses";
    InviteProperty["maxAge"] = "maxAge";
    InviteProperty["timestamp"] = "timestamp";
    InviteProperty["code"] = "code";
    InviteProperty["url"] = "url";
    InviteProperty["type"] = "type";
    InviteProperty["expiresTimestamp"] = "expiresTimestamp";
    InviteProperty["temporary"] = "temporary";
    InviteProperty["deletable"] = "deletable";
    InviteProperty["memberCount"] = "memberCount";
    InviteProperty["presenceCount"] = "presenceCount";
    InviteProperty["targetType"] = "targetType";
    InviteProperty["targetUser"] = "targetUser";
})(InviteProperty || (exports.InviteProperty = InviteProperty = {}));
exports.InviteProperties = (0, defineProperties_1.default)({
    authorID: (i) => i?.inviterId,
    channelID: (i) => i?.channelId,
    guildID: (i) => i?.guild?.id,
    maxUses: (i) => i?.maxUses,
    uses: (i) => i?.uses,
    maxAge: (i) => i?.maxAge,
    timestamp: (i) => i?.createdTimestamp,
    code: (i) => i?.code,
    url: (i) => i?.url,
    type: (i) => discord_js_1.InviteType[i?.type],
    expiresTimestamp: (i) => i?.expiresTimestamp,
    temporary: (i) => i?.temporary,
    deletable: (i) => i?.deletable,
    memberCount: (i) => i?.memberCount,
    presenceCount: (i) => i?.presenceCount,
    targetType: (i) => discord_js_1.InviteTargetType[i?.targetType],
    targetUser: (i) => i?.targetUser?.id
});
//# sourceMappingURL=invite.js.map