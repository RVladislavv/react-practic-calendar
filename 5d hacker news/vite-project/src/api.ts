interface NewsDetails {
    by: string
    descendants: number
    id: number
    kids?: number[]
    score: number
    time: number
    title: string
    type: string
    url?: string
}

export const fetchTop10NewsDetails = async (): Promise<NewsDetails[]> => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    if(!response.ok) {
        throw new Error('Problems with fetch TOP news')
    }
    const data = await response.json()
    const top10Ids = data.slice(0, 10)
    const details = await Promise.all(
        top10Ids.map(async (id: number) => {
            const response = await fetch(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            )
            if(!response.ok) {
                throw new Error('Problems with fetch new`s details')
            }
            return response.json()
        })
    )
    return details
}