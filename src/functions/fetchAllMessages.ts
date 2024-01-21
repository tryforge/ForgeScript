import { Collection, Message, TextBasedChannel } from "discord.js"

export default async function (ch: TextBasedChannel) {
    const arr = new Array<Message>()
    let lastId: string | undefined = undefined

    for (;;) {
        const msgs: Collection<string, Message> | null = await ch.messages
            .fetch({
                limit: 100,
                before: lastId,
            })
            .catch(() => null)

        if (!msgs?.size) break
        arr.push(...msgs.values())
        lastId = msgs.lastKey()!
    }

    return arr
}
