# $memberSetNickname
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits a member's nickname
## Usage
```
$memberSetNickname[guild ID;user ID;nickname]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The member to edit its nickname | Yes | No
nickname | String | The new nickname, leave empty to reset | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/memberSetNickname.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$memberSetNickname",
    version: "1.0.7",
    description: "Edits a member's nickname",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to edit its nickname",
            rest: false,
            required: true,
            pointer: 0,
            type: ArgType.Member,
        },
        {
            name: "nickname",
            description: "The new nickname, leave empty to reset",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [, m, nick]) {
        return Return.success(!!(await m.setNickname(nick).catch(noop || null)))
    },
})

```
    
</details>