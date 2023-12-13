# $channelID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the channel id of a channel name
## Usage
```
$channelID
```
---
```
$channelID[...name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The channel name to get it's id | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelID",
    version: "1.0.0",
    description: "Gets the channel id of a channel name",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "name",
            description: "The channel name to get it's id",
            required: true,
            rest: true,
            type: ArgType.String,
        },
    ],
    execute(ctx, [args]) {
        if (!this.hasFields) return this.success(ctx.channel?.id)
        const name = args.join(";")
        return this.success(ctx.client.channels.cache.find((x) => "name" in x && x.name === name)?.id)
    },
})

```
    
</details>