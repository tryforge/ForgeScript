# $bufferReadUtf8
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Reads utf8 string from a buffer
## Usage
```
$bufferReadUtf8[variable name;index;end index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable the buffer is allocated on | Yes | No
index | Number | The index to start reading at | Yes | No
end index | Number | The index to end reading at | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferReadUtf8.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$bufferReadUtf8",
    version: "1.1.0",
    description: "Reads utf8 string from a buffer",
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
            description: "The index to start reading at",
            required: true,
            type: ArgType.Number,
            rest: false
        },
        {
            name: "end index",
            description: "The index to end reading at",
            required: false,
            type: ArgType.Number,
            rest: false
        },
    ],
    execute(ctx, [ name, begin, end ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString("utf-8", begin, end || undefined))
    },
})
```
    
</details>