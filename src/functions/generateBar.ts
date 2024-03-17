export function generateBar(current: number, max: number, len: number = 10, fill: string = "█", empty: string = "▒") {
    const fillN = Math.round(Math.min(current, max) / max * len)
    return fill.repeat(fillN).padEnd((len * empty.length + fillN), empty)
}