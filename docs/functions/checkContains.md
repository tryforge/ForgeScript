# $checkContains
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether a string contains a set of other strings
## Usage
```
$checkContains[text;...matches]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
text | String | The text to check on | Yes | No
matches | String | The list of strings to try match | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/checkContains.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$checkContains",
    version: "1.0.0",
    description: "Checks whether a string contains a set of other strings",
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to check on",
            required: true,
            rest: false,
            type: ArgType.String,
        },
        {
            name: "matches",
            description: "The list of strings to try match",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(_, [text, matches]) {
        return this.success(matches.some((x) => text.includes(x)))
    },
})

```
    
</details>