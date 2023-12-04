# $bufferAllocUnsafe
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Unsafely allocates given number of bytes in a buffer
## Usage
```
$bufferAllocUnsafe[variable name;bytes]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable to load it to, accessed with $env[<name>] | Yes | No
bytes | Number | The number of bytes to alloc | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferAllocUnsafe.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferAllocUnsafe",
    version: "1.1.0",
    description: "Unsafely allocates given number of bytes in a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable to load it to, accessed with $env[<name>]",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "bytes",
            description: "The number of bytes to alloc",
            type: ArgType.Number,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ name, bytes ]) {
        return Return.success(void ctx.setEnvironmentKey(name, Buffer.allocUnsafe(bytes)))
    },
})
```
    
</details>