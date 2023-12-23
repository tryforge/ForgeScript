# $spoiler
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Makes given text a spoiler
## Usage
```
$spoiler[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to make spoiler, this will attempt to escape all | | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/spoiler.ts)
    
</summary>
    
```ts
import { bold, spoiler } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const SpoilerEscapeRegex = /(\|)/gim

export default new NativeFunction({
    name: "$spoiler",
    version: "1.3.0",
    brackets: true,
    description: "Makes given text a spoiler",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make spoiler, this will attempt to escape all |",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        return this.success(spoiler(str.replace(SpoilerEscapeRegex, "\\$1")))
    },
})
```
    
</details>