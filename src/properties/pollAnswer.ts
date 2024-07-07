import { Message, MessageType, PollAnswer, Presence, Role } from "discord.js"
import defineProperties from "../functions/defineProperties"

export enum PollAnswerProperty {
    text = "text",
    voteCount = "voteCount",
    id = "id",
    messageID = "messageID"
}

export const PollAnswerProperties = defineProperties<typeof PollAnswerProperty, PollAnswer>({
    text: i => i?.text,
    voteCount: i => i?.voteCount,
    id: i => i?.id,
    messageID: i => i?.poll.message.id
})
