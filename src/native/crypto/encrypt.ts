import { createCipheriv, createDecipheriv, scryptSync } from 'crypto';
import { ArgType, NativeFunction } from "../../structures"

/**
 * Provided to FS by lynnux
 * @param text
 * @param encryptionKey
 * @returns
 */

const FIXED_IV = Buffer.from('12345678901234567890123456789012', 'hex');

function deriveKey(key: string): Buffer {
    return scryptSync(key, 'salt', 32);
}
export function encrypt(text: string, key: string): string {
    const idkhowtocallthis = deriveKey(key);
    const cipher = createCipheriv('aes-256-cbc', idkhowtocallthis, FIXED_IV);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}


export default new NativeFunction({
    name: "$encrypt",
    version: "1.5.0",
    description: "Encrypts given text with a key",
    brackets: true,
    output: ArgType.String,
    args: [
        {
            name: "text",
            description: "The text to encrypt",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "key",
            description: "The key to use to encrypt text",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ text, key ]) {
        return this.success(encrypt(text, key))
    }
})