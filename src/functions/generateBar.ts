export function generateBar(current: number, max: number, len: number = 10, fill: string = "█", empty: string = "▒") {
    return fill.repeat(Math.round(Math.min(current, max) / max * len)).padEnd(len, empty)
}