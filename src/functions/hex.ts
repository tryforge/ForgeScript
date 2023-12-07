export function hex2int(hex: string) {
    return parseInt(hex.replace("#", ""), 16)
}

export function any2int(unk: string | number) {
    return typeof unk === "number" || !isNaN(Number(unk)) ? Number(unk) : hex2int(unk)
}

export function int2hex(int: number | string) {
    return Number(int).toString(16)
}