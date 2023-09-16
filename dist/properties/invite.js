"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteProperties = exports.InviteProperty = void 0;
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
    InviteProperty["expiresTimestamp"] = "expiresTimestamp";
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
    expiresTimestamp: (i) => i?.expiresTimestamp,
});
//# sourceMappingURL=invite.js.map