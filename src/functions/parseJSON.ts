export const JSONStartRegex = /^[[{]/
export const JSONEndRegex = /^[\]}]/
export const JSONNumberRegex = /^\d+$/

export default function parseJSON(str: unknown) {
    if (typeof str !== "string")
        return str
    
    try {
        return JSONNumberRegex.test(str) ? str : JSON.parse(str)
    } catch (error) {
        return str
    }
}