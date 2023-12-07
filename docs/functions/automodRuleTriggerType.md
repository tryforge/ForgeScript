# $automodRuleTriggerType
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The rule trigger type used by automod
## Usage
```
$automodRuleTriggerType
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/automodRuleTriggerType.ts)
    
</summary>
    
```ts
import { AutoModerationActionType, AutoModerationRuleTriggerType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodRuleTriggerType",
    version: "1.2.0",
    description: "The rule trigger type used by automod",
    unwrap: false,
    execute(ctx) {
        const trigger = ctx.automod?.ruleTriggerType
        return Return.success(trigger ? AutoModerationRuleTriggerType[trigger] : null)
    },
})
```
    
</details>