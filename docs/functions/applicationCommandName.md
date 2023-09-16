# $applicationCommandName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns an application command name
## Usage
```
$applicationCommandName
```
---
```
$applicationCommandName[id]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
id | String | The id of the command to pull its name | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/applicationCommandName.ts)
    
</summary>
    
```ts
import { noop } from "lodash";
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$applicationCommandName",
    version: "1.0.7",
    description: "Returns an application command name",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its name",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [ id ]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(noop)
            return Return.success(command ? command.name : undefined)
        }

        return Return.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.name : undefined)
    },
})
```
    
</details>