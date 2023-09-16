# $createForumPost
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a forum post, returns the post channel id
## Usage
```
$createForumPost[channel ID;title;description;...tags]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to create a post on | Yes | No
title | String | The post title | Yes | No
description | String | The post description | No | No
tags | String | The tags for the post | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/createForumPost.ts)
    
</summary>
    
```ts
import { BaseChannel, ChannelType, ForumChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createForumPost",
    version: "1.0.0",
    description: "Creates a forum post, returns the post channel id",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.type === ChannelType.GuildForum,
            description: "The channel to create a post on",
        },
        {
            name: "title",
            description: "The post title",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "description",
            description: "The post description",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "tags",
            description: "The tags for the post",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx, [channel, title, desc, tags]) {
        const forum = channel as ForumChannel

        ctx.container.content = desc || undefined

        const t = await forum.threads
            .create({
                appliedTags: tags,
                name: title,
                message: ctx.container.getOptions(),
            })
            .catch(noop)

        ctx.container.reset()

        return Return.success(t ? t.id : undefined)
    },
})

```
    
</details>