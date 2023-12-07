# $httpResult
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieve an http result value
## Usage
```
$httpResult
```
---
```
$httpResult[...key]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
key | String | The key to return its value | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpResult.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpResult",
    version: "1.2.0",
    description: "Retrieve an http result value",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true
        },
    ],
    brackets: false,
    unwrap: true,
    execute(ctx, [args]) {
        const env = ctx.getEnvironmentKey("result", ...args)
        return Return.successJSON(env)
    },
})

```
    
</details>