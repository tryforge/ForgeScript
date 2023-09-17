# $writeFile
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Writes text to a file
## Usage
```
$writeFile[path;text;encoding]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The path to the file | Yes | No
text | String | The text to write | Yes | No
encoding | String | The encoding to use for text | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/writeFile.ts)
    
</summary>
    
```ts
import { writeFileSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$writeFile",
    version: "1.0.0",
    description: "Writes text to a file",
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
            name: "text",
            description: "The text to write",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "encoding",
            description: "The encoding to use for text",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [path, data, encoding]) {
        // eslint-disable-next-line no-undef
        writeFileSync(path, data, { encoding: (encoding as BufferEncoding) || "utf-8" })

        return Return.success()
    },
})

```
    
</details>