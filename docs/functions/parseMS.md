# $parseMS
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Parses valid ms to duration
## Usage
```
$parseMS[ms;limit;separator;and]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
ms | Number | The ms to convert to string | Yes | No
limit | Number | Limit of units to use | No | No
separator | String | The separator to use for every unit | No | No
and | Boolean | Whether to use and word for last unit | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/parseMS.ts)
    
</summary>
    
```ts
import { TimeParser } from "../constants"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$parseMS",
    version: "1.0.2",
    description: "Parses valid ms to duration",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to string",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
        {
            name: "limit",
            description: "Limit of units to use",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "separator",
            description: "The separator to use for every unit",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "and",
            rest: false,
            description: "Whether to use and word for last unit",
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(_, [ms, limit, sep, and]) {
        return Return.success(
            TimeParser.parseToString(ms, {
                and: and || false,
                limit: limit || undefined,
                separator: sep || " ",
            })
        )
    },
})

```
    
</details>