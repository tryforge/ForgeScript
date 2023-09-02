# $let
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Create a keyword
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
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/let.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$let",
    version: "1.0.0",
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