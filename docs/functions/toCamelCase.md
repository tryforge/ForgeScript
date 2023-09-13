# $toCamelCase
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Converts a string to camel case
## Usage
```
$toCamelCase[message]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The string to turn camel case | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/toCamelCase.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import { camelCase } from "lodash"

export default new NativeFunction({
    name: "$toCamelCase",
    version: "1.0.6",
    description: "Converts a string to camel case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn camel case",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ m ]) {
        return Return.success(camelCase(m))
    },
})
```
    
</details>