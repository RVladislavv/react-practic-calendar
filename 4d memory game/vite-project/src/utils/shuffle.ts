export function shuffle<T>(array: T[]): T[] {
    const arr = [...array] // чтобы не мутировать оригинал

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        // swap
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}