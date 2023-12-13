# $addSticker
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a sticker to a guild, returns boolean
## Usage
```
$addSticker[guild ID;url;name;tags;description]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to add the sticker to | Yes | No
url | String | The url or file path for this sticker | Yes | No
name | String | The sticker name | Yes | No
tags | String | The tags to use for this sticker | Yes | No
description | String | The description for the sticker | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addSticker.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addSticker",
    version: "1.0.0",
    description: "Adds a sticker to a guild, returns boolean",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the sticker to",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The url or file path for this sticker",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "name",
            description: "The sticker name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "tags",
            description: "The tags to use for this sticker",
            type: ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "description",
            description: "The description for the sticker",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, url, name, tags, desc]) {
        const created = await guild.stickers
            .create({
                file: url,
                name,
                tags,
                description: desc || null,
            })
            .catch(noop)
        return this.success(!!created)
    },
})

```
    
</details>