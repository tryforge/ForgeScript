# $textSplit
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates an array on given text with a separator
## Usage
```
$textSplit[text;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to split | Yes | No
separator | String | The separator to use | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/textSplit.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
export const SplitTextName = "splits" as const

export default new NativeFunction({
    name: "$textSplit",
    version: "1.2.0",
    description: "Creates an array on given text with a separator",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to split",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text, sep ]) {
        ctx.setEnvironmentKey(SplitTextName, text.split(sep))
        return Return.success()
    },
})
```
    
</details>