# $inflate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Decompresses given input
## Usage
```
$inflate[input;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
input | String | The text to decompress | Yes | No
encoding | String | The input encoding to use | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/inflate.ts)
    
</summary>
    
```ts
import { deflateSync, inflateSync } from "zlib"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inflate",
    version: "1.2.0",
    description: "Decompresses given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "The text to decompress",
            type: ArgType.String,
            rest: false,
            required: true
        },
        {
            name: "encoding",
            rest: false,
            required: false,
            description: "The input encoding to use",
            type: ArgType.String
        }
    ],
    execute(ctx, [ input, enc ]) {
        return Return.success(inflateSync(Buffer.from(input, (enc ?? "hex") as BufferEncoding)).toString("utf-8"))
    },
})
```
    
</details>