# $truncateFile
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Truncates text in a file to given length
## Usage
```
$truncateFile[path;length]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The path to the file | Yes | No
length | Number | The new length for the file | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/truncateFile.ts)
    
</summary>
    
```ts
import { truncateSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$truncateFile",
    version: "1.0.0",
    description: "Truncates text in a file to given length",
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
            name: "length",
            description: "The new length for the file",
            rest: false,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [path, data]) {
        // eslint-disable-next-line no-undef
        truncateSync(path, data)

        return Return.success()
    },
})

```
    
</details>