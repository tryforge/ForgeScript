# $addEmoji
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an emoji to a guild, returns the emoji id
## Usage
```
$addEmoji[guild ID;name;url;return emoji ID;...roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to add this emote to | Yes | No
name | String | The name for the emoji | Yes | No
url | String | The emoji icon to use | Yes | No
return emoji ID | Boolean | Whether to return the emoji id | No | No
roles | Role | The roles to limit usage of this emote | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addEmoji.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addEmoji",
    version: "1.0.7",
    description: "Adds an emoji to a guild, returns the emoji id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add this emote to",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the emoji",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The emoji icon to use",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "return emoji ID",
            description: "Whether to return the emoji id",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "roles",
            description: "The roles to limit usage of this emote",
            rest: true,
            required: true,
            type: ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(_, [guild, name, icon, returnEmojiID, roles]) {
        const em = await guild.emojis
            .create({
                attachment: icon,
                name,
                roles: roles || undefined,
            })
            .catch(noop)

        return Return.success(returnEmojiID && em ? em.id : undefined)
    },
})

```
    
</details>