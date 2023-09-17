# $deleteMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Delete given message ids, returns the count of messages deleted
## Usage
```
$deleteMessage[channel ID;...messages]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to delete this message from | Yes | No
messages | Message | The messages to delete | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteMessage.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteMessage",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given message ids, returns the count of messages deleted",
    args: [
        {
            name: "channel ID",
            description: "The channel to delete this message from",
            rest: false,
            required: true,
            check: (i: BaseChannel) => i.isTextBased(),
            type: ArgType.Channel,
        },
        {
            name: "messages",
            description: "The messages to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.Message,
        },
    ],
    async execute(_, [channel, messages]) {
        if (!messages.length) return Return.success(0)

        if (messages.length === 1) {
            return Return.success(
                // @ts-ignore
                !!(await messages[0].delete().catch(noop)) + false
            )
        }

        const col =
            (await (channel as TextChannel)
                .bulkDelete(messages, true)
                .then((x) => x.size)
                .catch(noop)) ?? 0
        return Return.success(col)
    },
})

```
    
</details>