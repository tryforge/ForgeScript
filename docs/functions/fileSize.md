# $fileSize
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets size of a file or directory in bytes
## Usage
```
$fileSize[path]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The path to file or directory | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/fileSize.ts)
    
</summary>
    
```ts
import { existsSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$fileSize",
    version: "1.2.0",
    description: "Gets size of a file or directory in bytes",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to file or directory",
            required: true,
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(_, [path]) {
        return this.success(statSync(path).size)
    },
})

```
    
</details>