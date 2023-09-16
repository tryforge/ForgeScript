# $isBot
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Whether the user is a bot
## Usage
```
$isBot
```
---
```
$isBot[user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to check whether its a bot | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isBot.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBot",
    version: "1.0.0",
    description: "Whether the user is a bot",
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The user to check whether its a bot",
            required: true,
            rest: false,
            type: ArgType.User,
        },
    ],
    brackets: false,
    execute(ctx, [user]) {
        return Return.success(Boolean((user ?? ctx.user)?.bot))
    },
})

```
    
</details>