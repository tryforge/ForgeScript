# $charCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the char count of a text
## Usage
```
$charCount[text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to get its length | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/charCount.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$charCount",
    description: "Gets the char count of a text",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to get its length",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ str ]) {
        return Return.success(str.length)
    },
})
```
    
</details>