export const JSONStartRegex = /^[[{]/
export const JSONEndRegex = /^[\]}]/

export default function parseJSON(str: unknown) {
    if (typeof str !== "string")
        return str
    
    try {
        return JSON.parse(str)
    } catch (error) {
        return str
    }
}