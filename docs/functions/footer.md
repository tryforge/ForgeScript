# $footer
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed footer
## Usage
```
$footer[text;url;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text for the embed footer | Yes | No
url | String | The url for the embed footer | No | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/footer.ts)
    
</summary>
    
```ts
import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$footer",
    version: "1.0.0",
    description: "Adds an embed footer",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text for the embed footer",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "url",
            description: "The url for the embed footer",
            type: ArgType.String,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ text, iconURL, index ]) {
        ctx.container.embed((index ?? 0)).setFooter({
            text,
            iconURL: iconURL ?? undefined
        })
        return Return.success()
    },
})
```
    
</details>