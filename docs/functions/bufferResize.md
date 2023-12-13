# $bufferResize
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Resizes a buffer
## Usage
```
$bufferResize[variable name;length]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable the buffer is allocated on | Yes | No
length | Number | The new length for this buffer | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferResize.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferResize",
    version: "1.1.0",
    description: "Resizes a buffer",
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
            name: "length",
            description: "The new length for this buffer",
            required: true,
            type: ArgType.Number,
            rest: false
        }
    ],
    execute(ctx, [ name, length ]) {
        const buffer = ctx.getEnvironmentInstance(Buffer, name)
        if (buffer !== null) {
            const ref = Buffer.alloc(length)
            buffer.copy(ref, 0, 0, ref.length)
            ctx.setEnvironmentKey(name, ref)
        }
        return this.success()
    },
})
```
    
</details>