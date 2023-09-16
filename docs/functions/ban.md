# $ban
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Bans a member from the guild, returns true or false depending on whether the action was successfully performed
## Usage
```
$ban[guild ID;user ID;reason;delete message seconds]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to ban a member from | Yes | No
user ID | Member | The member to ban | Yes | No
reason | String | The reason to ban for | No | No
delete message seconds | Number | Delete messages from this member that were sent in this seconds time span | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/ban.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$ban",
    version: "1.0.0",
    description:
        "Bans a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to ban a member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to ban",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true,
        },
        {
            name: "reason",
            description: "The reason to ban for",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "delete message seconds",
            description: "Delete messages from this member that were sent in this seconds time span",
            rest: false,
            type: ArgType.Number,
        },
    ],
    async execute(ctx, [guild, member, reason, seconds]) {
        return Return.success(
            (await member
                .ban({
                    reason: reason || undefined,
                    deleteMessageSeconds: seconds || undefined,
                })
                .catch(() => false)) !== false
        )
    },
})

```
    
</details>