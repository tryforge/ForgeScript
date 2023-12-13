# $jsonSet
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a json key with a value
## Usage
```
$jsonSet[variable;value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The $env variable to set this value on | Yes | No
value | Json | The value to assign | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/jsonSet.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$jsonSet",
    version: "1.2.0",
    description: "Adds a json key with a value",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The $env variable to set this value on",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "value",
            description: "The value to assign",
            type: ArgType.Json,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ key, value ]) {
        ctx.setEnvironmentKey(key, value)
        return this.success()
    },
})
```
    
</details>