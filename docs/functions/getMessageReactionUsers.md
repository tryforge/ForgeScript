# $getMessageReactionUsers
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the user ids that have reacted to a specific emoji
## Usage
```
$getMessageReactionUsers[channel ID;message ID;emoji;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to get emoji users from | Yes | No
emoji | Reaction | The emoji to get its users | Yes | No
separator | String | The separator to use for every user | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getMessageReactionUsers.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$getMessageReactionUsers",
    description: "Gets the user ids that have reacted to a specific emoji",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel the message is located",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: TextBasedChannel) => i.isTextBased()
        },
        {
            name: "message ID",
            description: "The message to get emoji users from",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emoji",
            description: "The emoji to get its users",
            required: true,
            pointer: 1,
            rest: false,
            type: ArgType.Reaction
        },
        {
            name: "separator",
            description: "The separator to use for every user",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, message, reaction, sep ]) {
        const users = new Array<string>()

        let afterID: undefined | string = undefined
        
        if (reaction.users.cache.size <= reaction.count) {
            for (;;) {
                const bulk = await reaction.users.fetch({
                    limit: 100,
                    after: afterID 
                })
    
                if (!bulk.size) break
                afterID = bulk.last()?.id
                users.push(...bulk.map(x => x.id))
            }
        }

        return Return.success(
            users.join(sep || ", ")
        )
    },
})
```
    
</details>