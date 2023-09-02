# $includes
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether given string includes X string
## Usage
```
$includes[str;value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
str | String | The string to check against | Yes | No
value | String | The value to match | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/includes.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$includes",
    version: "1.0.0",
    description: "Checks whether given string includes X string",
    unwrap: true,
    args: [
        {
            name: "str",
            description: "The string to check against",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "value",
            required: true,
            description: "The value to match",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ str, match ]) {
        return Return.success(str.includes(match))   
    }
})
```
    
</details>