# $has
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether a keyword exists
## Usage
```
$has[name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The name of the keyword | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/has.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$has",
    version: "1.0.0",
    description: "Checks whether a keyword exists",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name of the keyword",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [name]) {
        return this.success(ctx.hasKeyword(name))
    },
})

```
    
</details>