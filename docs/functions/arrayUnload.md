# $arrayUnload
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Unloads an array from an environment variable
## Usage
```
$arrayUnload[variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable name to unload this array from | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayUnload.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayUnload",
    version: "1.0.0",
    description: "Unloads an array from an environment variable",
    args: [
        {
            name: "variable",
            description: "The variable name to unload this array from",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [name]) {
        ctx.deleteEnvironmentKey(name)
        return Return.success()
    },
})

```
    
</details>