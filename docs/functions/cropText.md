# $cropText
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Crops given text
## Usage
```
$cropText[text;start index;end index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to crop | Yes | No
start index | Number | The start index to start cropping | Yes | No
end index | Number | The end index to finish cropping | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/cropText.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$cropText",
    version: "1.0.3",
    description: "Crops given text",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to crop",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "start index",
            description: "The start index to start cropping",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "end index",
            description: "The end index to finish cropping",
            rest: false,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ text, start, end ]) {
        return Return.success(text.slice(start, end || undefined))
    },
})
```
    
</details>