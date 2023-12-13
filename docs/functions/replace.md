# $replace
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Replace text in a string
## Usage
```
$replace[text;match;new value;amount]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The base text | Yes | No
match | String | Text to match in base | Yes | No
new value | String | The text to replace matches with | Yes | No
amount | Number | How many times to perform this replacement | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/replace.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$replace",
    version: "1.0.0",
    description: "Replace text in a string",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The base text",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "match",
            description: "Text to match in base",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "new value",
            description: "The text to replace matches with",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "amount",
            description: "How many times to perform this replacement",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(_, [text, match, replacement, amount]) {
        amount ??= -1
        if (amount === -1) {
            return this.success(text.replaceAll(match, replacement))
        }
        let i = 0
        return this.success(text.replaceAll(match, (m) => (++i <= amount! ? replacement : m)))
    },
})

```
    
</details>