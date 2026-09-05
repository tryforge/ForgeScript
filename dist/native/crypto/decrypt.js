"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = decrypt;
const crypto_1 = require("crypto");
const structures_1 = require("../../structures");
const encrypt_1 = require("./encrypt");
/**
 * Provided to FS by lynnux
 */
const FIXED_IV = Buffer.from("12345678901234567890123456789012", "hex");
function decrypt(text, key) {
    const idkhowtocallthis = (0, encrypt_1.deriveKey)(key);
    const decipher = (0, crypto_1.createDecipheriv)("aes-256-cbc", new Uint8Array(idkhowtocallthis), new Uint8Array(FIXED_IV));
    let decrypted = decipher.update(text, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
}
exports.default = new structures_1.NativeFunction({
    name: "$decrypt",
    version: "1.5.0",
    description: "Decrypts given text with a key",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to decrypt",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "key",
            description: "The key to use to decrypt the text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, key]) {
        return this.success(decrypt(text, key));
    }
});
//# sourceMappingURL=decrypt.js.map