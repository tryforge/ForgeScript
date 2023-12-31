# $botOwnerID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the bot owner id
## Usage
```
$botOwnerID
```
---
```
$botOwnerID[return members;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
return members | Boolean | Whether to return all members | No | No
separator | String | The separator to use for every id | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/botOwnerID.ts)
    
</summary>
    
```ts
import { User } from "discord.js"
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botOwnerID",
    version: "1.0.0",
    description: "Returns the bot owner id",
    brackets: false,
    args: [
        {
            name: "return members",
            description: "Whether to return all members",
            rest: false,
            required: false,
            type: ArgType.Boolean
        },
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [ returnAll, sep ]) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(noop)
        const owner = ctx.client.application.owner
        return this.success(owner ? owner instanceof User ? owner.id : returnAll ? owner.members.map(x => x.id).join(sep ?? ", ") : owner.ownerId : null)
    },
})

```
    
</details>