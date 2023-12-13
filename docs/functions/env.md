# $env
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves an environment value
## Usage
```
$env[...key]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
key | String | The key to return its value | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/env.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$env",
    version: "1.0.0",
    description: "Retrieves an environment value",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true,
        },
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [args]) {
        const env = ctx.getEnvironmentKey(...args)
        return this.successJSON(env)
    },
})

```
    
</details>