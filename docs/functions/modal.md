# $modal
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a modal
## Usage
```
$modal[custom ID;title]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id for this modal | Yes | No
title | String | The title for the modal | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/modal.ts)
    
</summary>
    
```ts
import { ModalBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$modal",
    version: "1.0.0",
    description: "Creates a modal",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id for this modal",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "title",
            description: "The title for the modal",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ id, title ]) {
        ctx.container.modal = new ModalBuilder()
            .setCustomId(id)
            .setTitle(title)
        
        return Return.success()
    }
})
```
    
</details>