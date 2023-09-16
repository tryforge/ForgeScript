# $readFile
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> reads text from a file
## Usage
```
$readFile[path;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The path to the file | Yes | No
encoding | String | The encoding to use for the text | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/readFile.ts)
    
</summary>
    
```ts
import { appendFileSync, readFileSync, truncateSync, writeFileSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$readFile",
    version: "1.0.0",
    description: "reads text from a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "encoding",
            description: "The encoding to use for the text",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [path, encoding]) {
        // eslint-disable-next-line no-undef
        const txt = readFileSync(path, { encoding: (encoding as BufferEncoding) || "utf-8" })

        return Return.success(txt)
    },
})

```
    
</details>