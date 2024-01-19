import { Colors } from "discord.js"

export function hex2int(hex: string) {
    return parseInt(hex.replace("#", ""), 16)
}

export function int2hex(int: number | string) {
    return Number(int).toString(16)
}

export function resolveColor(value: string | number) {
    if (typeof value === "number" || !isNaN(Number(value)))
        return Number(value)

    if (value === "Random")
        return Math.floor(Math.random() * 0xFFFFFF)
    else if (value in Colors)
        return Colors[value as keyof typeof Colors]
    else 
        return hex2int(value)
}