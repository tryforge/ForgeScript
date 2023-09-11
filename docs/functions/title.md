# $title
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed title
## Usage
```
$title[title;hyperlink;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
title | String | Adds a title to the embed | Yes | No
hyperlink | String | The hyperlink url | No | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/title.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$title",
    version: "1.0.0",
    description: "Adds an embed title",
    unwrap: true,
    args: [
        {
            name: "title",
            description: "Adds a title to the embed",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "hyperlink",
            description: "The hyperlink url",
            rest: false,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ title, hyperlink, index ]) {
        const embed = ctx.container.embed((index ?? 0)).setTitle(title)
        if (hyperlink) embed.setURL(hyperlink)
        return Return.success()
    },
})
```
    
</details>