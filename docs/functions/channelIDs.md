# $channelIDs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns every channel id
## Usage
```
$channelIDs
```
---
```
$channelIDs[separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
separator | String | The separator to use for every channel | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/channelIDs.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$channelIDs",
    version: "1.3.0",
    unwrap: true,
    brackets: false,
    description: "Returns every channel id",
    args: [
        {
            name: "separator",
            description: "The separator to use for every channel",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ sep ]) {
        return this.success(ctx.client.channels.cache.map(x => x.id).join(sep ?? ", "))
    },
})
```
    
</details>