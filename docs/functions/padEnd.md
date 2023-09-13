# $padEnd
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Pads a string at the end
## Usage
```
$padEnd[message;max length;filler]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The string to pad at the end | Yes | No
max length | Number | The max length of the string | Yes | No
filler | String | The filler to use to pad | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/padEnd.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import { camelCase, fill, kebabCase, snakeCase } from "lodash"

export default new NativeFunction({
    name: "$padEnd",
    version: "1.0.6",
    description: "Pads a string at the end",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to pad at the end",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "max length",
            description: "The max length of the string",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "filler",
            description: "The filler to use to pad",
            rest: false,
            type: ArgType.String
        },
    ],
    execute(ctx, [ str, max, filler ]) {
        return Return.success(str.padEnd(max, filler || undefined))
    },
})
```
    
</details>