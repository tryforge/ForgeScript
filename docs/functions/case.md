# $case
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a switch case

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$case[value;code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
value | String | The match case | Yes | No
code | String | Code to execute if it matches this case | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/case.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$case",
    version: "1.0.3",
    description: "Adds a switch case",
    brackets: true,
    experimental: true,
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The match case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "Code to execute if it matches this case",
            rest: false,
            required: true,
            type: ArgType.String,
        },
    ],
    execute(_, [, code]) {
        return this.success(code)
    },
})

```
    
</details>