import { Poll, PollAnswer } from "discord.js";
export declare enum PollProperty {
    question = "question",
    layoutType = "layoutType",
    answers = "answers",
    answerCount = "answerCount",
    totalVotes = "totalVotes",
    expiresTimestamp = "expiresTimestamp",
    allowMultiselect = "allowMultiselect",
    resultsFinalized = "resultsFinalized"
}
export declare const PollProperties: import("..").Properties<typeof PollProperty, Poll>;
export declare enum PollAnswerProperty {
    id = "id",
    text = "text",
    emoji = "emoji",
    voteCount = "voteCount",
    messageID = "messageID"
}
export declare const PollAnswerProperties: import("..").Properties<typeof PollAnswerProperty, PollAnswer>;
//# sourceMappingURL=poll.d.ts.map