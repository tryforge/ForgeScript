# $commandInfo
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves command info
## Usage
```
$commandInfo[type;name;property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
type | String | The command type | Yes | No
name | String | The command name | Yes | No
property | String | The property to retrieve | Yes | No
separator | String | Separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/commandInfo.ts)
    
</summary>
    
```ts
import { ClientEvents, Events } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandInfo",
    version: "1.0.3",
    description: "Retrieves command info",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "name",
            description: "The command name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "property",
            description: "The property to retrieve",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [type, name, prop, sep]) {
        const cmd = ctx.client.commands.get(type as keyof ClientEvents, (x) => x.name === name || !!x.data.aliases?.includes(name))[0]
        if (!cmd) return Return.success()
        const val = cmd.data?.[prop]
        return Return.success(Array.isArray(val) ? val.join(sep || ", ") : val)
    },
})

```
    
</details>