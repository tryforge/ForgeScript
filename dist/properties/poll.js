"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollAnswerProperties = exports.PollAnswerProperty = exports.PollProperties = exports.PollProperty = void 0;
const discord_js_1 = require("discord.js");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var PollProperty;
(function (PollProperty) {
    PollProperty["question"] = "question";
    PollProperty["layoutType"] = "layoutType";
    PollProperty["answers"] = "answers";
    PollProperty["answerCount"] = "answerCount";
    PollProperty["totalVotes"] = "totalVotes";
    PollProperty["expiresTimestamp"] = "expiresTimestamp";
    PollProperty["allowMultiselect"] = "allowMultiselect";
    PollProperty["resultsFinalized"] = "resultsFinalized";
})(PollProperty || (exports.PollProperty = PollProperty = {}));
exports.PollProperties = (0, defineProperties_1.default)({
    question: (i) => i?.question.text,
    layoutType: (i) => discord_js_1.PollLayoutType[i?.layoutType],
    answers: (i) => JSON.stringify(i?.answers, undefined, 4),
    answerCount: (i) => i?.answers.size,
    totalVotes: (i) => i?.answers.reduce((n, x) => n + x.voteCount, 0) ?? 0,
    expiresTimestamp: (i) => i?.expiresTimestamp,
    allowMultiselect: (i) => i?.allowMultiselect,
    resultsFinalized: (i) => i?.resultsFinalized,
});
var PollAnswerProperty;
(function (PollAnswerProperty) {
    PollAnswerProperty["id"] = "id";
    PollAnswerProperty["text"] = "text";
    PollAnswerProperty["emoji"] = "emoji";
    PollAnswerProperty["voteCount"] = "voteCount";
    PollAnswerProperty["messageID"] = "messageID";
})(PollAnswerProperty || (exports.PollAnswerProperty = PollAnswerProperty = {}));
exports.PollAnswerProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    text: (i) => i?.text,
    emoji: (i) => i?.emoji?.toString(),
    voteCount: (i) => i?.voteCount,
    messageID: (i) => i?.poll.message.id
});
//# sourceMappingURL=poll.js.map