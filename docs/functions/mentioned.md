# $mentioned
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the mentioned users
## Usage
```
$mentioned
```
---
```
$mentioned[index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The index of the user | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/mentioned.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentioned",
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
        }
    ],
    execute(ctx, [ i ]) {
        return Return.success(
            this.hasFields ?
                ctx.message?.mentions.users.at(i)?.id :
                ctx.message?.mentions.users.map(x => x.id).join(", ")
        )
    },
})
```
    
</details>