# $splitText
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets an element of textSplit
## Usage
```
$splitText[index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
index | Number | The index to get split at | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/splitText.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import { SplitTextName } from "./textSplit"

export default new NativeFunction({
    name: "$splitText",
    version: "1.2.0",
    description: "Gets an element of textSplit",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "index",
            description: "The index to get split at",
            rest: false,
            required: true,
            type: ArgType.Number
        }
    ],
    execute(ctx, [ index ]) {
        return this.success(
            ctx.getEnvironmentInstance(Array, SplitTextName)?.[index]
        )
    },
})
```
    
</details>