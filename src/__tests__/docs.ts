/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import express from "express"
const app = express()
app.use(express.static("./docs"))
app.listen(3000)
