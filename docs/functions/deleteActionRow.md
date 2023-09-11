# $deleteActionRow
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes an action row at given index
## Usage
```
$deleteActionRow[index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The row index to delete | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteActionRow.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteActionRow",
    version: "1.0.0",
    description: "Deletes an action row at given index",
    brackets: true,
    args: [
        {
            name: "index",
            description: "The row index to delete",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ index ]) {
        ctx.container.components.splice(index , 1)
        return Return.success()
    },
})
```
    
</details>