# $unparseDate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Unparses given date to ms
## Usage
```
$unparseDate[date]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
date | Date | The date to get its ms | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/unparseDate.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$unparseDate",
    version: "1.2.0",
    description: "Unparses given date to ms",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "date",
            description: "The date to get its ms",
            type: ArgType.Date,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [ date ]) {
        return Return.success(date.getTime())
    },
})
```
    
</details>