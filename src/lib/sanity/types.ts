export interface Post {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
    excerpt?: string
    mainImage?: {
        asset?: {
            _id: string
            url: string
        }
        alt?: string
    }
    body?: any[]
}
