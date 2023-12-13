# $jsonLoad
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Loads JSON to an env variable
## Usage
```
$jsonLoad[variable;json]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable to load it to | Yes | No
json | Json | The json data | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/jsonLoad.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$jsonLoad",
    version: "1.0.0",
    description: "Loads JSON to an env variable",
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable to load it to",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "json",
            description: "The json data",
            type: ArgType.Json,
            required: true,
            rest: false,
        },
    ],
    unwrap: true,
    execute(ctx, [name, json]) {
        ctx.setEnvironmentKey(name, json)
        return this.success()
    },
})

```
    
</details>