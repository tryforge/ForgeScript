# $hyperlink
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates an hyperlink text
## Usage
```
$hyperlink[text;url]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to make hyperlink | Yes | No
url | String | The url to use for hyperlink | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/hyperlink.ts)
    
</summary>
    
```ts
import { bold } from "discord.js"
import { ArgType, NativeFunction } from "../structures"

export const BoldEscapeRegex = /(\*)/gim

export default new NativeFunction({
    name: "$hyperlink",
    version: "1.3.0",
    brackets: true,
    description: "Creates an hyperlink text",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to make hyperlink",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "url",
            description: "The url to use for hyperlink",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ str, url ]) {
        return this.success(`[${str}](${url})`)
    },
})
```
    
</details>