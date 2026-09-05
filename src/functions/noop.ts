/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { Logger } from "../structures/@internal/Logger"

export default (...args: any[]) => {
    Logger.error(...args)
}
