# $createQueryParams
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates query params with given fields
## Usage
```
$createQueryParams[...param name; param value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
param name; param value | String | The param name followed by the value, (param1;value1) | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/createQueryParams.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import { stringify } from "node:querystring"

export default new NativeFunction({
    name: "$createQueryParams",
    version: "1.0.7",
    description: "Creates query params with given fields",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "param name; param value",
            description: "The param name followed by the value, (param1;value1)",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ params ]) {
        const obj: Record<string, string> = {}
        for (let i = 0, len = params.length;i < len;i += 2) {
            obj[params[i]] = params[i + 1]
        }
        return Return.success(stringify(obj))
    },
})
```
    
</details>