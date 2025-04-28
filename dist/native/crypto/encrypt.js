"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
const crypto_1 = require("crypto");
const structures_1 = require("../../structures");
/**
 * Provided to FS by lynnux
 * @param text
 * @param encryptionKey
 * @returns
 */
const FIXED_IV = Buffer.from("12345678901234567890123456789012", "hex");
function deriveKey(key) {
    return (0, crypto_1.scryptSync)(key, "salt", 32);
}
function encrypt(text, key) {
    const idkhowtocallthis = deriveKey(key);
    const cipher = (0, crypto_1.createCipheriv)("aes-256-cbc", idkhowtocallthis, FIXED_IV);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}
exports.encrypt = encrypt;
exports.default = new structures_1.NativeFunction({
    name: "$encrypt",
    version: "1.5.0",
    description: "Encrypts given text with a key",
    brackets: true,
    output: structures_1.ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to encrypt",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "key",
            description: "The key to use to encrypt text",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [text, key]) {
        return this.success(encrypt(text, key));
    }
});
//# sourceMappingURL=encrypt.js.map