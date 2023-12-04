# $emojiID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the emoji id
## Usage
```
$emojiID
```
---
```
$emojiID[emoji name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
emoji name | String | The emoji name to return its id | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/emojiID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emojiID",
    version: "1.2.0",
    description: "Returns the emoji id",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji name",
            description: "The emoji name to return its id",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [emoji]) {
        if (this.hasFields) return Return.success(ctx.client.emojis.cache.find((x) => x.name === emoji)?.id)

        return Return.success(ctx.emoji?.name)
    },
})

```
    
</details>