# $commandNames
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Return commands with given type
## Usage
```
$commandNames[type;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
type | String | The command type to pull names from | Yes | No
separator | String | The separator to use for every name | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/commandNames.ts)
    
</summary>
    
```ts
import { ClientEvents } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandNames",
    version: "1.0.6",
    description: "Return commands with given type",
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type to pull names from",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "separator",
            description: "The separator to use for every name",
            rest: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ type, sep ]) {
        return Return.success(ctx.client.commands.get(type as keyof ClientEvents).map(x => x.name).filter(Boolean).join(sep || ", "))
    }
})
```
    
</details>