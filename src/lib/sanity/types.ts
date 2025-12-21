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
    categories?: Array<{ title: string; color?: string }>
    tags?: Array<{ title: string }>
    body?: any[]
}
