"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkProperties = exports.BulkProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var BulkProperty;
(function (BulkProperty) {
    BulkProperty["messages"] = "messages";
    BulkProperty["contents"] = "contents";
    BulkProperty["timestamps"] = "timestamps";
    BulkProperty["attachments"] = "attachments";
    BulkProperty["stickers"] = "stickers";
    BulkProperty["users"] = "users";
    BulkProperty["count"] = "count";
})(BulkProperty || (exports.BulkProperty = BulkProperty = {}));
exports.BulkProperties = (0, defineProperties_1.default)({
    messages: (i, sep) => i?.map(x => x.id).join(sep ?? ", "),
    timestamps: (i, sep) => i?.map(x => x.createdTimestamp).join(sep ?? ", "),
    attachments: (i, sep) => i?.flatMap(x => x.attachments.map(x => x.url)).filter(Boolean).join(sep ?? ", "),
    stickers: (i, sep) => i?.flatMap(x => x.stickers.map(x => x.url)).filter(Boolean).join(sep ?? ", "),
    contents: (i, sep) => i?.map(x => x.content).filter(Boolean).join(sep ?? ", "),
    users: (i, sep) => i?.map(x => x.author?.id).filter(Boolean).join(sep ?? ", "),
    count: i => i?.length
});
//# sourceMappingURL=bulk.js.map