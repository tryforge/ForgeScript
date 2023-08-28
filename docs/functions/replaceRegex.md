# $replaceRegex
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Replace text in a string using regex
## Usage
```
$replaceRegex[text;match;flags;new value;amount]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The base text | Yes | No
match | String | Regex to match in base | Yes | No
flags | String | The flags to use for the regex | Yes | No
new value | String | The text to replace matches with | Yes | No
amount | Number | How many times to perform this replacement | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/replaceRegex.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$replaceRegex",
    description: "Replace text in a string using regex",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "match",
            description: "Regex to match in base",
            rest: false,
            required: true,
            type: ArgType.String,
            pointer: 2
        },
        {
            name: "flags",
            description: "The flags to use for the regex",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ text, raw, flags, replacement, amount ]) {
        amount ??= -1 
        const regex = new RegExp(raw, flags)

        if (amount === -1) {
            return Return.success(text.replace(regex, replacement))
        }
        let i = 0
        return Return.success(text.replace(regex, m => ++i <= amount! ? m : replacement))
    }
})
```
    
</details>