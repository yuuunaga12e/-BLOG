import { client } from '@/lib/sanity/client'
import { POSTS_QUERY } from '@/lib/sanity/queries'
import { Post } from '@/lib/sanity/types'
import { PostCard } from '@/components/features/posts/PostCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const revalidate = 60

export default async function Home() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">


        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <p className="col-span-full text-center text-text-main/50 py-12">
              記事がまだありません。
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
