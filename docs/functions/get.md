# $get
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Get a keyword value
## Usage
```
$get[key]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
key | String | The key name | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/get.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$get",
    version: "1.0.0",
    description: "Get a keyword value",
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name]) {
        return this.success(ctx.getKeyword(name))
    },
})

```
    
</details>