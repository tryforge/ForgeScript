/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { parentPort } from "worker_threads"
import noop from "../../functions/noop"

export interface ITranslateData {
    text: string
    locale: string
}

/* Translation package not installed.
parentPort?.on("message", async function(msg: ITranslateData) {
    const translate = await import("@iamtraction/google-translate").then(x => x.default)
    for (;;) {
        const txt = await translate(msg.text, {
            from: "en",
            to: msg.locale
        }).catch(noop)
        if (!txt)
            continue
        parentPort?.postMessage(txt.text)
        break
    }
}) */