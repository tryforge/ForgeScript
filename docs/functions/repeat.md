# $repeat
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Repeats given text for x times
## Usage
```
$repeat[text;amount]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to repeat | Yes | No
amount | Number | How many times to repeat this text | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/repeat.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$repeat",
    version: "1.1.0",
    description: "Repeats given text for x times",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to repeat",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "amount",
            rest: false,
            required: true,
            type: ArgType.Number,
            description: "How many times to repeat this text"
        }
    ],
    execute(ctx, [ txt, times ]) {
        return Return.success(txt.repeat(times))
    },
})
```
    
</details>