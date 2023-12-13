# $getEmbed
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves data of an embed
## Usage
```
$getEmbed[channel ID;message ID;embed index;property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to pull message from | Yes | No
message ID | Message | The message to retrieve data from | Yes | No
embed index | Number | The embed index to get data from | Yes | No
property | Enum (`title`, `titleURL`, `authorName`, `authorIcon`, `footerText`, `image`, `thumbnail`, `footerIcon`, `description`, `timestamp`, `authorURL`, `color`) | The property to pull | Yes | No
separator | String | Separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getEmbed.ts)
    
</summary>
    
```ts
import { BaseChannel, Embed, EmbedBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import { EmbedProperties, EmbedProperty } from "../properties/embed"

export default new NativeFunction({
    name: "$getEmbed",
    version: "1.0.3",
    description: "Retrieves data of an embed",
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
            name: "embed index",
            description: "The embed index to get data from",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EmbedProperty,
            required: true,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [, m, index, prop, sep]) {
        const embed = m.embeds[index] as Embed | undefined
        return this.success(EmbedProperties[prop](embed ? EmbedBuilder.from(embed) : undefined, sep || ", "))
    },
})

```
    
</details>