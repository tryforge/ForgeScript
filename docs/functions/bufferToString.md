# $bufferToString
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Stringifies a buffer
## Usage
```
$bufferToString[variable name;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable the buffer is allocated on | Yes | No
encoding | String | The encoding to stringify with | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferToString.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferToString",
    version: "1.1.0",
    description: "Stringifies a buffer",
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
            name: "encoding",
            description: "The encoding to stringify with",
            type: ArgType.String,
            rest: false
        }
    ],
    execute(ctx, [ name, encoding ]) {
        return this.success(void ctx.getEnvironmentInstance(Buffer, name)?.toString(encoding as BufferEncoding || "utf-8"))
    },
})
```
    
</details>