# $md5
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a md5 key from given input
## Usage
```
$md5[input;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
input | String | Input to use for feeding | Yes | No
encoding | String | The output encoding | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/md5.ts)
    
</summary>
    
```ts
import { createHash, randomUUID } from "crypto"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$md5",
    version: "1.2.0",
    description: "Creates a md5 key from given input",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "input",
            description: "Input to use for feeding",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "encoding",
            type: ArgType.String,
            description: "The output encoding",
            rest: false,
            required: false
        }
    ],
    execute(ctx, [ input, enc ]) {
        const md5 = createHash("md5").update(input).digest().toString((enc || "hex") as BufferEncoding)
        return this.success(md5)
    }
})
```
    
</details>