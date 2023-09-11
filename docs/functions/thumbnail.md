# $thumbnail
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed thumbnail
## Usage
```
$thumbnail[url;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
url | String | The url for the embed thumbnail | Yes | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/thumbnail.ts)
    
</summary>
    
```ts
import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$thumbnail",
    version: "1.0.0",
    description: "Adds an embed thumbnail",
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The url for the embed thumbnail",
            required: true,
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
    execute(ctx, [ thumbnail, index ]) {
        ctx.container.embed((index ?? 0)).setThumbnail(thumbnail)
        return Return.success()
    },
})
```
    
</details>