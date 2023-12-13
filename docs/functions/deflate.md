# $deflate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Compresses given input
## Usage
```
$deflate[input;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
input | String | The text to compress | Yes | No
encoding | String | The output encoding to use | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deflate.ts)
    
</summary>
    
```ts
import { deflateSync, inflateSync } from "zlib"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deflate",
    version: "1.2.0",
    description: "Compresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to compress",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The output encoding to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ input, out ]) {
        return this.success(deflateSync(input).toString((out ?? "hex") as BufferEncoding))
    },
})
```
    
</details>