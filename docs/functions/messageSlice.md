# $messageSlice
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Slices this message's args
## Usage
```
$messageSlice[start;end]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
start | Number | The start index | No | No
end | Number | The end index | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/messageSlice.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$messageSlice",
    version: "1.3.0",
    description: "Slices this message's args",
    brackets: true,
    args: [
        {
            name: "start",
            description: "The start index",
            rest: false,
            required: false,
            type: ArgType.Number
        },
        {
            name: "end",
            description: "The end index",
            rest: false,
            required: false,
            type: ArgType.Number
        }
    ],
    unwrap: true,
    execute(ctx, [ start, end ]) {
        return this.success(ctx.args.slice(start ?? undefined, end ?? undefined).join(" "))
    },
})
```
    
</details>