# 🤖 Utility Bot

A lightweight, modern, and highly modular Discord general community utility bot built with **Discord.js v14**. Inspired by the multi-purpose utility frameworks of ProBot and Nova, this bot features a professional **Command Handler** architecture designed for optimal performance, stability, and scale.

<!-- Shields & Badges -->
<div align="center">
      <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js" alt="Node.js 20+" />
       <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />

## ✨ Features & Commands

The bot is loaded with 14 production-ready global slash (`/`) commands separated into clean modules:

### ⚙️ Utility & Profile
* `/user` - Displays comprehensive layout cards detailing profile, ID, account creation, and server join timestamp timelines.
* `/server` - Displays server specific statistics, owner identities, member counts, and creation tracking metadata.
* `/avatar` - Fetches high-resolution PNG copies of targeted member profile imagery alongside direct links.
* `/botinfo` - Pulls system core architecture summaries, environment engines, active server lists, and active package structures.
* `/ping` - Latency metric diagnostic reporting for both direct processing turnarounds and websocket API routing delays.

### 🔨 Server Moderation
* `/kick` - Instantly boots a rule-breaker from your guild layout maps with mandatory background logging rules.
* `/ban` - Blacklists a targeted member configuration profile from your chat platform globally.
* `/warn` - Formally issues a behavior flag warning action layout against a specified server member profile.
* `/clear` - Bulks and purges history configurations from active layouts simultaneously (Limits up to 100 entries).

### 🎲 Fun & Mini-Games
* `/roll` - Generates random digital dice rolling matrix calculations (1 to 6).
* `/flip` - Simulates coin-tossing calculations reporting random Heads or Tails layouts instantly.
* `/8ball` - Replicates traditional Magic 8-Ball oracle predictions over user input inquiries dynamically.
* `/joke` - Pulls random dad joke string array indices instantly to keep the general chat vibe active.
* `/poll` - Auto-generates server voting polls with native interactive thumbs up/down polling reaction matrices.

---

## 🏢 Project Directory Setup

The workspace operates on an asynchronous command router built into a dynamic directory scan:

```text
my-discord-bot/
├── .env                  # Secret application configuration files
├── package.json          # Node engine dependency and build matrix mappings
├── README.md             # Repository operational summaries 
└── src/
    ├── index.js          # Core execution driver and command event routers
    ├── register.js       # Discord global command map synchronization tools
    └── commands/         # Modular command scripts
        ├── user.js
        ├── server.js
        ├── avatar.js
        ├── roll.js
        ├── kick.js
        ├── ban.js
        ├── clear.js
        ├── ping.js
        ├── botinfo.js
        ├── flip.js
        ├── 8ball.js
        ├── joke.js
        ├── poll.js
        └── warn.js

```

---

## 🚀 Step-by-Step Installation

### 1. Clone the Files
Download or clone this directory directly onto your workspace environment.

### 2. Install Project Dependencies
Launch your server console terminal within the root directory tree and execute:
```bash
npm install
```

### 3. Application Security Setup (`.env`)
Create an file named `.env` inside your base root configuration map and supply your platform credentials gathered from the [Discord Developer Portal](https://discord.com):
```env
DISCORD_TOKEN=YOUR_BOT_SECRET_TOKEN_HERE
CLIENT_ID=YOUR_APPLICATION_CLIENT_ID_HERE
```
> ⚠️ **Important:** Enable **Server Members Intent** and **Message Content Intent** in your Bot settings pane on the developer site before executing the runtime engine.

### 4. Direct Global Command Registration
Sync your application commands directly onto Discord system networks by running the register utility:
```bash
npm run register
```

### 5. Fire Up the Engine
To activate the server processes and host your bot engine workspace live, run:
```bash
npm run start
```

---
Made With Love M5
EnzoCord
## 📜 License
Distributed under the **MIT License**. See `LICENSE` for more details.
