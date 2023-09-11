# $color
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed color
## Usage
```
$color[color;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
color | String () | The color for the embed | Yes | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/color.ts)
    
</summary>
    
```ts
import { ColorResolvable, Colors } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$color",
    version: "1.0.0",
    description: "Adds an embed color",
    unwrap: true,
    args: [
        {
            name: "color",
            description: "The color for the embed",
            required: true,
            enum: Colors,
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
    execute(ctx, [ color, index ]) {
        const col = (!isNaN(Number(color)) ? Number(color) : color.startsWith("#") ? color.slice(1) : color) as ColorResolvable
        ctx.container.embed((index ?? 0)).setColor(col)
        return Return.success()
    },
})
```
    
</details>