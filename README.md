<div align="center">
  <a href="https://docs.botforge.org">
    <img src="https://api.botforge.org/assets/spot_logotop.png" alt="ForgeScript logo" width="340">
  </a>
  <h1>ForgeScript</h1>

  <p>A fast, lightweight, and extensible scripting framework for building Discord bots in Node.js.</p>

  <p>
    <a href="https://www.npmjs.com/package/@tryforge/forgescript"><img alt="NPM version" src="https://img.shields.io/npm/v/@tryforge/forgescript.svg?style=for-the-badge&labelColor=000000&color=462bf7"></a>
    <a href="https://www.npmjs.com/package/@tryforge/forgescript"><img alt="NPM downloads" src="https://img.shields.io/npm/dm/@tryforge/forgescript.svg?style=for-the-badge&labelColor=000000&color=338cf5"></a>
    <a href="https://github.com/tryforge/ForgeScript/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/npm/l/@tryforge/forgescript.svg?style=for-the-badge&labelColor=000000&color=32cd32"></a>
    <a href="https://discord.gg/yFW5Ju6JP8"><img alt="Discord" src="https://img.shields.io/badge/Discord-Join%20Community-5865F2.svg?style=for-the-badge&logo=discord&logoColor=white&labelColor=000000"></a>
  </p>

  <p>
    <a href="https://docs.botforge.org">Documentation</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://docs.botforge.org">Function Reference</a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://discord.gg/yFW5Ju6JP8">Discord Community</a>
  </p>
</div>

---

## Overview

ForgeScript is a lightweight scripting language built on top of [discord.js](https://discord.js.org/) that makes Discord bot development fast and straightforward. Instead of dealing with massive boilerplate, you write clean code that executes top to bottom.

- **1,100+ Functions**: Built-in support for embeds, components, automod, moderation, math, and string tools.
- **Prefix & Slash Commands**: Dedicated file loaders for standard message commands and Discord Application (slash) commands.
- **Extensible**: Easily add custom functions or plug in database and canvas extensions.
- **TypeScript Ready**: Types included out of the box.

---

## Installation

Ensure you have **Node.js v22.0.0** or higher installed.

```bash
npm install @tryforge/forgescript
```

---

## Getting Started

### 1. Initialize the Client (`index.js`)

> **Tip:** You can use the [BotForge Client Generator](https://tools.botforge.org/clientgen) to configure intents, events, and generate this file interactively.

```javascript
const { ForgeClient } = require("@tryforge/forgescript");

const client = new ForgeClient({
  prefixes: ["!"],
  intents: [
    "Guilds",
    "GuildMessages",
    "MessageContent", // Privileged intent: enable in Discord Developer Portal
  ],
  events: [
    "messageCreate",
    "interactionCreate", // Required for slash commands and components
    "clientReady",
  ],
});

// Load standard prefix commands
client.commands.load("./commands/prefix");

// Load slash / application commands
client.applicationCommands.load("./commands/slash");

client.login(process.env.DISCORD_TOKEN);
```

### 2. Prefix Command Example (`commands/prefix/ping.js`)

In ForgeScript, code runs sequentially from top to bottom. Built-in functions like `$title`, `$description`, and `$addField` make creating rich embeds effortless without constructing complex objects:

```javascript
module.exports = {
  name: "ping",
  type: "messageCreate",
  code: `
    $title[Pong! 🏓]
    $description[Current bot performance and connection status:]
    $addField[Latency;$pingms;true]
    $addField[Uptime;$parseMS[$uptime];true]
    $color[#5865F2]
    $footer[Requested by $username;$userAvatar]
  `,
};
```

<img src="https://api.botforge.org/assets/spot_codeexample.png" alt="Command Output Preview" width="520" />

### 3. Slash Command Example (`commands/slash/ping.js`)

Slash commands define a Discord `data` object alongside their executable `code`:

```javascript
module.exports = {
  data: {
    name: "ping",
    description: "Check bot latency",
  },
  code: `Pong! Latency: $pingms`,
};
```

> **Tip:** You can visually configure options, choices, and subcommands using the [Application Command Builder](https://tools.botforge.org/appbuilder?sc_definition=tree) to generate your `data` structure. For further details, check out the [Slash Commands Guide](https://docs.botforge.org/guide/Slash-Commands-284).

---

## Extensions

ForgeScript can be augmented with extensions. For example, to add database capabilities with **ForgeDB**:

```bash
npm install @tryforge/forge.db
```

```javascript
const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");

const client = new ForgeClient({
  prefixes: ["!"],
  intents: ["Guilds", "GuildMessages", "MessageContent"],
  events: ["messageCreate"],
  extensions: [
    new ForgeDB(),
  ],
});
```

---

## Contributors

Thank you to everyone contributing to ForgeScript!

<p align="center">
  <a href="https://github.com/tryforge/ForgeScript/graphs/contributors">
    <img src="https://api.botforge.org/v1/contributors.png?package=ForgeScript" alt="ForgeScript Contributors" width="100%" />
  </a>
</p>

---

## Resources & Community

- **Official Documentation**: [docs.botforge.org](https://docs.botforge.org)
- **Slash Commands Guide**: [docs.botforge.org/guide/Slash-Commands-284](https://docs.botforge.org/guide/Slash-Commands-284)
- **Discord Community**: [Join our Discord Server](https://discord.gg/yFW5Ju6JP8) for support and announcements.
- **Client Generator**: [tools.botforge.org/clientgen](https://tools.botforge.org/clientgen)
- **Contributing**: Issues and pull requests are welcome on [GitHub](https://github.com/tryforge/ForgeScript).

---

## License

This project is licensed under the [LGPL-3.0-or-later License](LICENSE).
