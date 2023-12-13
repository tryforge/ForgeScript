# $interactionUpdate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Forces an interaction update
## Usage
```
$interactionUpdate
```
---
```
$interactionUpdate[content]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
content | String | The content to use for this response | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/interactionUpdate.ts)
    
</summary>
    
```ts
import { Message } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$interactionUpdate",
    version: "1.0.3",
    description: "Forces an interaction update",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "content",
            description: "The content to use for this response",
            required: true,
            type: ArgType.String,
            rest: false,
        },
    ],
    async execute(ctx, [content]) {
        ctx.container.content = content || undefined
        ctx.container.update = true

        if (!this.hasFields) {
            await ctx.container.send(ctx.obj)
            return this.success()
        }

        await ctx.container.send<Message<true>>(ctx.obj)

        return this.success()
    },
})

```
    
</details>