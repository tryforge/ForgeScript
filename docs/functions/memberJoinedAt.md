# $memberJoinedAt
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the timestamp the member joined at
## Usage
```
$memberJoinedAt
```
---
```
$memberJoinedAt[guild ID;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to get its join date | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberJoinedAt.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberJoinedAt",
    description: "Returns the timestamp the member joined at",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            type: ArgType.Guild,
            required: true
        },
        {
            name: "user ID",
            description: "The user to get its join date",
            rest: false,
            type: ArgType.Member,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        member ??= ctx.member!
        return Return.success(member?.joinedTimestamp)
    },
})
```
    
</details>