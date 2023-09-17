# $sendDM
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sends a dm to the user
## Usage
```
$sendDM[user ID;content;return message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
user ID | User | The user to dm | Yes | No
content | String | The content to send | No | No
return message ID | Boolean | Returns the message id of the newly created message | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/sendDM.ts)
    
</summary>
    
```ts
import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sendDM",
    version: "1.0.0",
    description: "Sends a dm to the user",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user to dm",
            rest: false,
            type: ArgType.User,
            required: true,
        },
        {
            name: "content",
            description: "The content to send",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Returns the message id of the newly created message",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [user, content, returnMessageID]) {
        ctx.container.content = content || undefined
        const msg = await ctx.container.send<Message<true>>(user)
        return Return.success(returnMessageID ? msg?.id : undefined)
    },
})

```
    
</details>