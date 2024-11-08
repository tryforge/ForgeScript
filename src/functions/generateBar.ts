export function generateBar(
    current: number,
    max: number,
    len: number = 10,
    fill: string = "█",
    empty: string = "▒",
    round = true,
    fillStart: string = "",
    fillEnd: string = "",
    emptyStart: string = "",
    emptyEnd: string = ""
): string {
    let fillN = Math[round ? "round" : "trunc"](Math.min(Math.max(current, 0), max) / max * len)
    let emptyN = len - fillN
    let start = "", end = ""

    if (len > 1) {
        if (fillN > 0 && emptyN > 0) {
            start = fillStart || ""
            end = emptyEnd || ""
            fillN -= start ? 1 : 0
            emptyN -= end ? 1 : 0
        } else if (fillN > 0) {
            start = fillStart || ""
            end = fillEnd || ""
            fillN -= (start ? 1 : 0) + (end ? 1 : 0)
        } else if (emptyN > 0) {
            start = emptyStart || ""
            end = emptyEnd || ""
            emptyN -= (start ? 1 : 0) + (end ? 1 : 0)
        }
    }

    fillN = Math.max(fillN, 0)
    emptyN = Math.max(emptyN, 0)

    return start + fill.repeat(fillN) + empty.repeat(emptyN) + end
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