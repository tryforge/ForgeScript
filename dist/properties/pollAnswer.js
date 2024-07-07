"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAnswerProperties = exports.PollAnswerProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var PollAnswerProperty;
(function (PollAnswerProperty) {
    PollAnswerProperty["text"] = "text";
    PollAnswerProperty["voteCount"] = "voteCount";
    PollAnswerProperty["id"] = "id";
    PollAnswerProperty["messageID"] = "messageID";
})(PollAnswerProperty || (exports.PollAnswerProperty = PollAnswerProperty = {}));
exports.PollAnswerProperties = (0, defineProperties_1.default)({
    text: i => i?.text,
    voteCount: i => i?.voteCount,
    id: i => i?.id,
    messageID: i => i?.poll.message.id
});
//# sourceMappingURL=pollAnswer.js.map