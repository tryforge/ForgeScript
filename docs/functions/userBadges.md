# $userBadges
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the public badges of an user
## Usage
```
$userBadges
```
---
```
$userBadges[user ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to return its badges | Yes | No
separator | String | The separator to use for every badge | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/userBadges.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userBadges",
    version: "1.0.0",
    description: "Returns the public badges of an user",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to return its badges",
            required: true,
            rest: false,
            type: ArgType.User
        },
        {
            name: "separator",
            description: "The separator to use for every badge",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: false,
    async execute(ctx, [ user, sep ]) {
        const flags = await (user ?? ctx.user).fetchFlags().catch(noop)
        return Return.success(
            flags ? flags.toArray().join(sep || ", ") : undefined    
        )
    },
})
```
    
</details>