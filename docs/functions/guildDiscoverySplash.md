# $guildDiscoverySplash
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the guild discovery splash
## Usage
```
$guildDiscoverySplash
```
---
```
$guildDiscoverySplash[guild ID;size;extension]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to retrieve the discovery splash | Yes | No
size | Number | The size to use for the image | No | No
extension | String | The extension to use for the image | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildDiscoverySplash.ts)
    
</summary>
    
```ts
import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildDiscoverySplash",
    version: "1.3.0",
    description: "Returns the guild discovery splash",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the discovery splash",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [g, size, ext]) {
        return this.success(
            (g ?? ctx.guild)?.discoverySplashURL({
                extension: (ext as ImageExtension) || undefined,
                size: (size as ImageSize) || 2048,
            })
        )
    },
})

```
    
</details>