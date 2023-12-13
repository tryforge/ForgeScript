# $bufferWriteInt32
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Writes int32 to a buffer
## Usage
```
$bufferWriteInt32[variable name;index;int]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable the buffer is allocated on | Yes | No
index | Number | The index to start writing on | Yes | No
int | Number | The int to write | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferWriteInt32.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$bufferWriteInt32",
    version: "1.2.0",
    description: "Writes int32 to a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "index",
            description: "The index to start writing on",
            required: true,
            type: ArgType.Number,
            rest: false
        },
        {
            name: "int",
            description: "The int to write",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ name, index, n ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.writeInt32LE(n, index))
    },
})
```
    
</details>