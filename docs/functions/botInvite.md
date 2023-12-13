# $botInvite
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a bot's invite link
## Usage
```
$botInvite
```
---
```
$botInvite[...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
perms | String | The perms for the invite link | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/botInvite.ts)
    
</summary>
    
```ts
import { OAuth2Scopes, PermissionFlagsBits, PermissionsString } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botInvite",
    version: "1.0.0",
    description: "Returns a bot's invite link",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "perms",
            description: "The perms for the invite link",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [perms]) {
        return this.success(
            ctx.client.generateInvite({
                scopes: [OAuth2Scopes.Bot],
                permissions: (perms as PermissionsString[]) || ["Administrator"],
            })
        )
    },
})

```
    
</details>