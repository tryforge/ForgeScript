# $channelExists
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether a channel id exists
## Usage
```
$channelExists[channel ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | String | The channel to check | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelExists.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$channelExists",
    version: "1.0.0",
    description: "Returns whether a channel id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to check",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    async execute(ctx, [id]) {
        return this.success(CompiledFunction.IdRegex.test(id) && ctx.client.channels.cache.has(id))
    },
})

```
    
</details>