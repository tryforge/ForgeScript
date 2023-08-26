# $log
> Log something to console.
## Usage
```
$log[...message]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The message to log to console | Yes | Yes
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/log.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$log",
    description: "Log something to console.",
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The message to log to console",
            rest: true,
            type: ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [ args ]) {
        console.log(...args)
        return Return.success()
    },
})
```
    
</details>