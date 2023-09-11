# $author
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed author
## Usage
```
$author[name;icon;hyperlink;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | Adds a name to the embed author | Yes | No
icon | String | The icon url | No | No
hyperlink | String | The hyperlink url | No | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/author.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$author",
    version: "1.0.0",
    description: "Adds an embed author",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "Adds a name to the embed author",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "icon",
            description: "The icon url",
            rest: false,
            type: ArgType.String
        },
        {
            name: "hyperlink",
            description: "The hyperlink url",
            rest: false,
            type: ArgType.String
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ name, icon, hyperlink, index ]) {
        ctx.container.embed((index ?? 0)).setAuthor({
            name,
            iconURL: icon ?? undefined,
            url: hyperlink ?? undefined
        })

        return Return.success()
    },
})
```
    
</details>