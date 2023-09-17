# $platform
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the member platforms
## Usage
```
$platform
```
---
```
$platform[guild ID;user ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to return the member from | Yes | No
user ID | Member | The member to return its platform | Yes | No
separator | String | The separator for each platform | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/platform.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$platform",
    version: "1.0.0",
    description: "Returns the member platforms",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to return the member from",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "user ID",
            description: "The member to return its platform",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "separator",
            description: "The separator for each platform",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [, member, sep]) {
        return Return.success(Object.keys((member ?? ctx.member)?.presence?.clientStatus ?? {}).join(sep || ", "))
    },
})

```
    
</details>