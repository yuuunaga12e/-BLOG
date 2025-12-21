import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Post } from '@/lib/sanity/types'
import { urlForImage } from '@/lib/sanity/client'

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    const imageUrl = post.mainImage ? urlForImage(post.mainImage)?.width(800).height(500).url() : null

    return (
        <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50 relative">
            <Link href={`/posts/${post.slug.current}`} className="block overflow-hidden aspect-[16/10] relative">
                {post.categories && post.categories.length > 0 && (
                    <span
                        className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm ${post.categories[0].color === 'blue' ? 'bg-blue-500' :
                                post.categories[0].color === 'red' ? 'bg-red-500' :
                                    post.categories[0].color === 'purple' ? 'bg-purple-500' :
                                        post.categories[0].color === 'orange' ? 'bg-orange-500' :
                                            post.categories[0].color === 'gray' ? 'bg-gray-500' :
                                                'bg-accent' // default (green)
                            }`}
                    >
                        {post.categories[0].title}
                    </span>
                )}
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || post.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-text-main/50">
                        No Image
                    </div>
                )}
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-accent mb-2">
                    {post.publishedAt && format(new Date(post.publishedAt), 'yyyy.MM.dd')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-main leading-tight group-hover:text-accent transition-colors">
                    <Link href={`/posts/${post.slug.current}`}>
                        {post.title}
                    </Link>
                </h3>

                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                            <span key={index} className="text-xs text-text-main/60 bg-secondary/30 px-2 py-0.5 rounded">
                                #{tag.title}
                            </span>
                        ))}
                    </div>
                )}

                {post.excerpt && (
                    <p className="text-text-main/80 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                        {post.excerpt}
                    </p>
                )}

                <Link
                    href={`/posts/${post.slug.current}`}
                    className="inline-flex items-center text-accent font-medium text-sm hover:underline mt-auto"
                >
                    Read more &rarr;
                </Link>
            </div>
        </article>
    )
}
