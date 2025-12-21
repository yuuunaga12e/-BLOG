import { client, urlForImage } from '@/lib/sanity/client'
import { POST_QUERY, POSTS_QUERY } from '@/lib/sanity/queries'
import { Post } from '@/lib/sanity/types'
import { PortableText } from '@portabletext/react'
import { ptComponents } from '@/components/features/posts/PortableTextComponents'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { format } from 'date-fns'

type Props = {
    params: Promise<{ slug: string }>
}

export const revalidate = 60

// Generate static params for static generation
export async function generateStaticParams() {
    const posts = await client.fetch<Post[]>(POSTS_QUERY)
    return posts.map((post) => ({
        slug: post.slug.current,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await client.fetch<Post>(POST_QUERY, { slug })

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    const ogImage = post.mainImage
        ? urlForImage(post.mainImage)?.width(1200).height(630).url()
        : undefined

    return {
        title: `${post.title} | Sanity Blog`,
        description: post.excerpt || post.title,
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            images: ogImage ? [ogImage] : [],
            type: 'article',
            publishedTime: post.publishedAt,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || post.title,
            images: ogImage ? [ogImage] : [],
        },
    }
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params
    const post = await client.fetch<Post>(POST_QUERY, { slug })

    if (!post) {
        notFound()
    }

    const mainImageUrl = post.mainImage
        ? urlForImage(post.mainImage)?.width(1200).height(600).url()
        : null

    return (
        <>
            <Header />
            <article className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <header className="mb-10 text-center">
                    <div className="text-accent font-medium mb-3">
                        {post.publishedAt && format(new Date(post.publishedAt), 'yyyy.MM.dd')}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-tight mb-6">
                        {post.title}
                    </h1>

                    {mainImageUrl && (
                        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-md mt-8">
                            <Image
                                src={mainImageUrl}
                                alt={post.mainImage?.alt || post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-lg prose-brown max-w-none">
                    {post.body ? (
                        <PortableText
                            value={post.body}
                            components={ptComponents}
                        />
                    ) : (
                        <p className="text-text-main/60 italic">本文がありません。</p>
                    )}
                </div>
            </article>
            <Footer />
        </>
    )
}
