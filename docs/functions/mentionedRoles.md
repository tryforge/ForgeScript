# $mentionedRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the mentioned roles
## Usage
```
$mentionedRoles
```
---
```
$mentionedRoles[index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The index of the role | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/mentionedRoles.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedRoles",
    version: "1.0.0",
    brackets: false,
    description: "Returns the mentioned roles",
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index of the role",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(ctx, [i]) {
        return this.success(
            this.hasFields
                ? ctx.message?.mentions.roles.at(i)?.id
                : ctx.message?.mentions.roles.map((x) => x.id).join(", ")
        )
    },
})

```
    
</details>