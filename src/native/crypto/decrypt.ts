/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/

import { createDecipheriv } from "crypto"
import { ArgType, NativeFunction } from "../../structures"
import { deriveKey } from "./encrypt"

/**
 * Provided to FS by lynnux
 */

const FIXED_IV = Buffer.from("12345678901234567890123456789012", "hex")

export function decrypt(text: string, key: string): string {
    const idkhowtocallthis = deriveKey(key)
    const decipher = createDecipheriv("aes-256-cbc", new Uint8Array(idkhowtocallthis), new Uint8Array(FIXED_IV))
    let decrypted = decipher.update(text, "hex", "utf-8")
    decrypted += decipher.final("utf-8")
    return decrypted
}

export default new NativeFunction({
    name: "$decrypt",
    version: "1.5.0",
    description: "Decrypts given text with a key",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to decrypt",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "key",
            description: "The key to use to decrypt the text",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ text, key ]) {
        return this.success(decrypt(text, key))
    }
})