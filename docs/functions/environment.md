# $environment
> Retrieve an environment value
## Usage
```
$environment[...key]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
key | String | The key to return its value | Yes | Yes
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/environment.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$environment",
    description: "Retrieve an environment value",
    args: [
        {
            name: "key",
            description: "The key to return its value",
            required: true,
            type: ArgType.String,
            rest: true
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ args ]) {
        return Return.successFormatted(ctx.getEnvironmentKey(args))
    },
})
```
    
</details>