# $markdown
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds backticks to text
## Usage
```
$markdown[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to mark down, this will attempt to escape all ` | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/markdown.ts)
    
</summary>
    
```ts
import { bold } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const MarkdownEscapeRegex = /(`)/gim

export default new NativeFunction({
    name: "$markdown",
    version: "1.3.0",
    brackets: true,
    description: "Adds backticks to text",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to mark down, this will attempt to escape all `",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str ]) {
        
        return this.success(bold(str.replace(MarkdownEscapeRegex, "\\$1")))
    },
})
```
    
</details>