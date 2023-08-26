# $function
> Runs a function.
## Usage
```
$function[...code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | Code to execute | Yes | Yes
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/function.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$function",
    description: "Runs a function.",
    unwrap: false,
    args: [
        {
            name: "code",
            description: "Code to execute",
            required: true,
            type: ArgType.String,
            rest: true
        }
    ],
    brackets: true,
    execute: async function(ctx) {
        const rt = await this["resolveArgs"](ctx)
        if (rt.return) return Return.success(rt.value)
        else if (rt.success) return Return.success()
        return rt
    }
})
```
    
</details>