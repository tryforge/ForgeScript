"use strict";
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
    BulkProperty["users"] = "users";
    BulkProperty["count"] = "count";
})(BulkProperty || (exports.BulkProperty = BulkProperty = {}));
exports.BulkProperties = (0, defineProperties_1.default)({
    messages: (i, sep) => i?.map(x => x.id).join(sep ?? ", "),
    contents: (i, sep) => i?.map(x => x.content).filter(Boolean).join(sep ?? ", "),
    users: (i, sep) => i?.map(x => x.author?.id).filter(Boolean).join(sep ?? ", "),
    count: i => i?.length
});
//# sourceMappingURL=bulk.js.map