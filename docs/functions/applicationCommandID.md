# $applicationCommandID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the application command id
## Usage
```
$applicationCommandID
```
---
```
$applicationCommandID[name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The name of the command to pull its id | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/applicationCommandID.ts)
    
</summary>
    
```ts
import { noop } from "lodash";
import { ArgType, NativeFunction, Return } from "../structures";

export default new NativeFunction({
    name: "$applicationCommandID",
    version: "1.0.7",
    description: "Returns the application command id",
    brackets: false,
    args: [
        {
            name: "name",
            description: "The name of the command to pull its id",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [ name ]) {
        if (this.hasFields) {
            const commands = await ctx.client.application.commands.fetch().catch(noop)
            return Return.success(commands?.find(x => x.name === name)?.id)
        }

        return Return.success(ctx.interaction?.isCommand() ? ctx.interaction.commandName : undefined)
    },
})
```
    
</details>