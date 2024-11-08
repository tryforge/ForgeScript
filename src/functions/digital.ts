export function digital(ms: number): string {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)

    const HH = String(hours).padStart(2, "0")
    const MM = String(minutes).padStart(2, "0")
    const SS = String(seconds).padStart(2, "0")

    return `${HH}:${MM}:${SS}`
}