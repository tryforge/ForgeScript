# $function
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Runs a function

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$function[...code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | Code to execute | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/function.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/@internal/NativeFunction"
import { Return } from "../structures/@internal/Return"

export default new NativeFunction({
    name: "$function",
    version: "1.0.0",
    description: "Runs a function",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "code",
            description: "Code to execute",
            required: true,
            type: ArgType.String,
            rest: true,
        },
    ],
    brackets: true,
    execute: async function (ctx) {
        const rt = await this["resolveArgs"](ctx)
        if (rt.return) return this.success(rt.value)
        else if (rt.success) return this.success()
        return rt
    },
})

```
    
</details>