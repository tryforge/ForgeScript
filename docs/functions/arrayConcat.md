# $arrayConcat
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Concat arrays and load them into another variable
## Usage
```
$arrayConcat[variable;...variables]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable | String | The variable to load the result to | Yes | No
variables | String | The variable names to concat | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayConcat.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayConcat",
    version: "1.0.0",
    description: "Concat arrays and load them into another variable",
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The variable to load the result to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variables",
            description: "The variable names to concat",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, variables]) {
        const arr = new Array<unknown>()

        for (let i = 0, len = variables.length; i < len; i++) {
            const v = variables[i]
            const load = ctx.getEnvironmentKey([v])
            if (Array.isArray(load)) arr.push(...load)
        }

        ctx.setEnvironmentKey(name, arr)
        return Return.success()
    },
})

```
    
</details>