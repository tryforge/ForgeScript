# $interactionReply
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Forces an interaction reply
## Usage
```
$interactionReply
```
---
```
$interactionReply[content;return message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
content | String | The content to use for this response | Yes | No
return message ID | Boolean | Whether to fetch and return the message id of the reply | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/interactionReply.ts)
    
</summary>
    
```ts
import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$interactionReply",
    version: "1.0.0",
    description: "Forces an interaction reply",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this response",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "return message ID",
            description: "Whether to fetch and return the message id of the reply",
            rest: false,
            type: ArgType.Boolean,
            required: false
        }
    ],
    async execute(ctx, [ content, returnMessageID ]) {
        if (!this.hasFields) {
            await ctx.container.send(ctx.obj)
            return Return.success()
        }

        ctx.container.fetchReply = returnMessageID ?? false
        ctx.container.content = content ?? undefined
        const reply = await ctx.container.send<Message<true>>(ctx.obj)

        return Return.success(returnMessageID ? reply?.id : undefined)
    },
})
```
    
</details>