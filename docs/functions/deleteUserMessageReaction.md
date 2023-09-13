# $deleteUserMessageReaction
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes user emoji reaction from a message, returns bool
## Usage
```
$deleteUserMessageReaction[channel ID;message ID;emoji;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel the message is located | Yes | No
message ID | Message | The message to remove user emoji reaction | Yes | No
emoji | Reaction | The message reaction to remove user from | Yes | No
user ID | User | The user to delete its reaction | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteUserMessageReaction.ts)
    
</summary>
    
```ts
import { TextBasedChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteUserMessageReaction",
    version: "1.0.6",
    description: "Deletes user emoji reaction from a message, returns bool",
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
            description: "The message to remove user emoji reaction",
            rest: false,
            type: ArgType.Message,
            pointer: 0,
            required: true
        },
        {
            name: "emoji",
            description: "The message reaction to remove user from",
            rest: false,
            required: true,
            pointer: 1,
            type: ArgType.Reaction
        },
        {
            name: "user ID",
            description: "The user to delete its reaction",
            required: true,
            rest: false,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ ,, emoji, user ]) {
        return Return.success(
            !!(await emoji.users.remove(user).catch(noop))
        )
    },
})
```
    
</details>