# $deleteEmojis
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Delete given emoji ids, returns the count of emotes deleted
## Usage
```
$deleteEmojis[guild ID;...emojis]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to delete emotes from | Yes | No
emojis | GuildEmoji | The emojis to delete | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteEmojis.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteEmojis",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given emoji ids, returns the count of emotes deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete emotes from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "emojis",
            description: "The emojis to delete",
            rest: true,
            pointer: 0,
            required: true,
            type: ArgType.GuildEmoji,
        },
    ],
    async execute(_, [, emotes]) {
        let count = 0
        for (let i = 0, len = emotes.length; i < len; i++) {
            const emote = emotes[i]
            const success = await emote.delete().catch(noop)
            if (success) count++
        }

        return this.success(count)
    },
})

```
    
</details>