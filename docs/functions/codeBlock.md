# $codeBlock
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a code block with given text
## Usage
```
$codeBlock[text;lang]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to create block with, this will attempt to escape all ` | Yes | No
lang | String | The language to give to this code block | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/codeBlock.ts)
    
</summary>
    
```ts
import { bold, codeBlock } from "discord.js"
import { ArgType, NativeFunction } from "../structures"
import { MarkdownEscapeRegex } from "./markdown"

export default new NativeFunction({
    name: "$codeBlock",
    version: "1.3.0",
    brackets: true,
    description: "Creates a code block with given text",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to create block with, this will attempt to escape all `",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "lang",
            description: "The language to give to this code block",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str, lang ]) {
        str = str.replace(MarkdownEscapeRegex, "\\$1")
        return this.success(
            lang ? 
                codeBlock(lang, str) :
                codeBlock(str)
        )
    },
})
```
    
</details>