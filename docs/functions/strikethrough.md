# $strikethrough
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Makes given text strikethrough
## Usage
```
$strikethrough[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to make strikethrough, this will attempt to escape all ~ | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/strikethrough.ts)
    
</summary>
    
```ts
import { bold, strikethrough } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const StrikeThroughEscapeRegex = /(~)/gim

export default new NativeFunction({
    name: "$strikethrough",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text strikethrough",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make strikethrough, this will attempt to escape all ~",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(strikethrough(str.replace(StrikeThroughEscapeRegex, "\\$1")))
    },
})
```
    
</details>