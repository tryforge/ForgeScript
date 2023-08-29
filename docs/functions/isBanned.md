# $isBanned
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Whether this user is banned
## Usage
```
$isBanned[guild ID;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to check bans on | Yes | No
user ID | User | The user to check ban | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isBanned.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBanned",
    brackets: true,
    unwrap: true,
    description: "Whether this user is banned",
    args: [
        {
            name: "guild ID",
            description: "The guild to check bans on",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The user to check ban",
            rest: false,
            type: ArgType.User,
            required: true
        }
    ],
    async execute(ctx, [ guild, user ]) {
        const isBanned = await guild.bans.fetch(user).catch(noop)
        return Return.success(!!isBanned)
    },
})
```
    
</details>