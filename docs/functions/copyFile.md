# $copyFile
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Copies given path to another path
## Usage
```
$copyFile[path;destination]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The path to make a copy of | Yes | No
destination | String | The output path to copy to | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/copyFile.ts)
    
</summary>
    
```ts
import { copyFileSync, cpSync, statSync } from "fs"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$copyFile",
    version: "1.2.0",
    description: "Copies given path to another path",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make a copy of",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "destination",
            description: "The output path to copy to",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ old, now ]) {
        if (statSync(old).isDirectory())
            cpSync(old, now)
        else
            copyFileSync(old, now)
        return this.success()
    },
})
```
    
</details>