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
        <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50">
            <Link href={`/posts/${post.slug.current}`} className="block overflow-hidden aspect-[16/10]">
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
                <h3 className="text-xl font-bold mb-3 text-text-main leading-tight group-hover:text-accent transition-colors">
                    <Link href={`/posts/${post.slug.current}`}>
                        {post.title}
                    </Link>
                </h3>
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
