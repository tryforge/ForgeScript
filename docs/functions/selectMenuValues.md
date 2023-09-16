# $selectMenuValues
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns select menu values
## Usage
```
$selectMenuValues
```
---
```
$selectMenuValues[index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The index of the value | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/selectMenuValues.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$selectMenuValues",
    version: "1.0.0",
    description: "Returns select menu values",
    brackets: false,
    args: [
        {
            name: "index",
            description: "The index of the value",
            type: ArgType.Number,
            rest: false,
            required: true,
        },
    ],
    unwrap: true,
    execute(ctx, [index]) {
        if (!ctx.isSelectMenu()) return Return.success()

        if (this.hasFields) {
            return Return.success(ctx.interaction.values[index])
        } else {
            return Return.success(ctx.interaction.values.join(", "))
        }
    },
})

```
    
</details>