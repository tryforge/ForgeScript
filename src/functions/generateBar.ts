export function generateBar(current: number, max: number, len: number = 10, fill: string = "█", empty: string = "▒", round = true) {
    const fillN = Math[round ? "round" : "trunc"](Math.min(current, max) / max * len)
    return fill.repeat(fillN) + empty.repeat(len - fillN)
}

export function generateAdvancedBar(
    current: number,
    max: number,
    len: number = 10,
    data: string[],
): string {
    let out = ""
    const portion = max / len

    while (len--) {
        const diff = Math.max(current, 0) / portion
        out += (current -= portion, data.find((x, i) => diff <= (i + 1) / data.length) ?? data.at(-1))
    }

    return out
}