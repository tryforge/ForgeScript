# $bufferLength
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the length of a buffer
## Usage
```
$bufferLength[variable name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
variable name | String | The variable the buffer is allocated on | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bufferLength.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$bufferLength",
    version: "1.1.0",
    description: "Returns the length of a buffer",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "variable name",
            description: "The variable the buffer is allocated on",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [ name ]) {
        return Return.success(void ctx.getEnvironmentInstance(Buffer, name)?.length)
    },
})
```
    
</details>