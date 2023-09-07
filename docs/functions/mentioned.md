# $mentioned
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the mentioned users
## Usage
```
$mentioned
```
---
```
$mentioned[index;return author]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The index of the user | Yes | No
return author | Boolean | Return author ID if not found | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/mentioned.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentioned",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned users",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the user",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "return author",
            description: "Return author ID if not found",
            rest: false,
            type: ArgType.Boolean
        }
    ],
    execute(ctx, [ i, rt ]) {
        const id: string | undefined = this.hasFields ?
            ctx.message?.mentions.users.at(i)?.id :
            ctx.message?.mentions.users.map(x => x.id).join(", ")
        return Return.success(
            id ?? (rt ? ctx.user?.id : undefined)
        )
    },
})
```
    
</details>