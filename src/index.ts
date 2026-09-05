/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import generateMetadata from "./functions/generateMetadata"
import defineProperties from "./functions/defineProperties"
import array from "./functions/array"

export * from "./managers"
export * from "./structures"
export * from "./core"

export { generateMetadata, defineProperties, array }
export type { Properties } from "./functions/defineProperties"