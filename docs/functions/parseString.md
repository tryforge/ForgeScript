# $parseString
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Parses valid duration string to ms
## Usage
```
$parseString[duration]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
duration | String | The valid string to convert to ms | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/parseString.ts)
    
</summary>
    
```ts
import { TimeParser } from "../constants"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$parseString",
    version: "1.0.2",
    description: "Parses valid duration string to ms",
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [ str ]) {
        try {
            return this.success(TimeParser.parseToMS(str))
        } catch (error) {
            return this.success(0)
        }
    },
})

```
    
</details>