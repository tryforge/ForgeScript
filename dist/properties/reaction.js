"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionProperties = exports.ReactionProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ReactionProperty;
(function (ReactionProperty) {
    ReactionProperty["emoji"] = "emoji";
    ReactionProperty["count"] = "count";
    ReactionProperty["burstCount"] = "burstCount";
    ReactionProperty["normalCount"] = "normalCount";
    ReactionProperty["me"] = "me";
    ReactionProperty["meBurst"] = "meBurst";
    ReactionProperty["burstColors"] = "burstColors";
})(ReactionProperty || (exports.ReactionProperty = ReactionProperty = {}));
exports.ReactionProperties = (0, defineProperties_1.default)({
    emoji: (i) => i?.emoji.toString(),
    count: (i) => i?.count,
    burstCount: (i) => i?.countDetails.burst,
    normalCount: (i) => i?.countDetails.normal,
    me: (i) => i?.me,
    meBurst: (i) => i?.meBurst,
    burstColors: (i, sep) => i?.burstColors?.join(sep ?? ", "),
});
//# sourceMappingURL=reaction.js.map