# $description
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed description
## Usage
```
$description[description;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
description | String | The description for the embed | Yes | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/description.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$description",
    version: "1.0.0",
    description: "Adds an embed description",
    unwrap: true,
    args: [
        {
            name: "description",
            description: "The description for the embed",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ description, index ]) {
        ctx.container.embed((index ?? 0)).setDescription(description)
        return Return.success()
    },
})
```
    
</details>