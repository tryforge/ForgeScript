/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Poll, PollAnswer, PollLayoutType } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum PollProperty {
    question = "question",
    layoutType = "layoutType",
    answers = "answers",
    answerCount = "answerCount",
    totalVotes = "totalVotes",
    expiresTimestamp = "expiresTimestamp",
    allowMultiselect = "allowMultiselect",
    resultsFinalized = "resultsFinalized",
}

export const PollProperties = defineProperties<typeof PollProperty, Poll>({
    question: (i) => i?.question.text,
    layoutType: (i) => PollLayoutType[i?.layoutType!],
    answers: (i) => JSON.stringify(i?.answers, undefined, 4),
    answerCount: (i) => i?.answers.size,
    totalVotes: (i) => i?.answers.reduce((n, x) => n + x.voteCount, 0) ?? 0,
    expiresTimestamp: (i) => i?.expiresTimestamp,
    allowMultiselect: (i) => i?.allowMultiselect,
    resultsFinalized: (i) => i?.resultsFinalized,
})

export enum PollAnswerProperty {
    id = "id",
    text = "text",
    emoji = "emoji",
    voteCount = "voteCount",
    messageID = "messageID"
}

export const PollAnswerProperties = defineProperties<typeof PollAnswerProperty, PollAnswer>({
    id: (i) => i?.id,
    text: (i) => i?.text,
    emoji: (i) => i?.emoji?.toString(),
    voteCount: (i) => i?.voteCount,
    messageID: (i) => i?.poll.message.id
})