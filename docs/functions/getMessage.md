# $getMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves data of a message
## Usage
```
$getMessage[channel ID;message ID;property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to pull message from | Yes | No
message ID | Message | The message to retrieve data from | Yes | No
property | Enum (`id`, `content`, `flags`, `username`, `type`, `channelID`, `guildID`, `authorID`, `timestamp`) | The property to pull | Yes | No
separator | String | Separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getMessage.ts)
    
</summary>
    
```ts
import { BaseChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import { MessageProperties, MessageProperty } from "../properties/message"

export default new NativeFunction({
    name: "$getMessage",
    version: "1.0.3",
    description: "Retrieves data of a message",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: ArgType.Message,
            pointer: 0,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: MessageProperty,
            required: true,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [, m, prop, sep]) {
        return this.success(MessageProperties[prop](m, sep || ", "))
    },
})

```
    
</details>