# $let
> Create a keyword
## Usage
```
$let[key;...value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
key | String | The key name | Yes | No
value | String | The key value | Yes | Yes
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/let.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$let",
    description: "Create a keyword",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "value",
            description: "The key value",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name, args ]) {
        ctx.setKeyword(name, args.join(";"))
        return Return.success()
    },
})
```
    
</details>