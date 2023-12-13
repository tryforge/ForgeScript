# $isUserDMEnabled
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether given user can be DMed
## Usage
```
$isUserDMEnabled
```
---
```
$isUserDMEnabled[user]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user | User | The user to test dms | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isUserDMEnabled.ts)
    
</summary>
    
```ts
import { DiscordAPIError } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isUserDMEnabled",
    version: "1.2.0",
    description: "Checks whether given user can be DMed",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "user",
            description: "The user to test dms",
            rest: false,
            required: true,
            type: ArgType.User
        }
    ],
    async execute(ctx, [ user ]) {
        user ??= ctx.user!

        // Only way to know is to send an empty message
        const dm = await user?.send("").catch(err => err)
        
        return this.success(
            // If any of these is not met, cant be dmed
            // 50007 = Cannot send message to this user
            !!dm && dm instanceof DiscordAPIError && dm.status !== 50007
        )
    },
})
```
    
</details>