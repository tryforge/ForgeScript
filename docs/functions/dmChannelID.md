# $dmChannelID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the dm channel id of a user
## Usage
```
$dmChannelID
```
---
```
$dmChannelID[user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | User to get the dm channel | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/dmChannelID.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$dmChannelID",
    version: "1.0.0",
    description: "Returns the dm channel id of a user",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "User to get the dm channel",
            rest: false,
            required: true,
            type: ArgType.User,
        },
    ],
    async execute(ctx, [user]) {
        user ??= ctx.user!
        const dm = await user?.createDM().catch(noop)
        return Return.success(dm ? dm.id : undefined)
    },
})

```
    
</details>
