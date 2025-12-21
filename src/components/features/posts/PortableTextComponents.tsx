import { PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity/client'
import Image from 'next/image'

export const ptComponents: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="my-8 rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src={urlForImage(value)?.width(800).fit('max').auto('format').url() || ''}
                        alt={value.alt || 'Post Image'}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                    />
                    {value.caption && (
                        <p className="text-center text-sm text-text-main/60 mt-2 italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            )
        },
    },
    block: {
        h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-text-main border-l-4 border-accent pl-4">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-3 text-text-main/90">
                {children}
            </h3>
        ),
        normal: ({ children }) => (
            <p className="mb-4 leading-relaxed text-text-main/80 text-lg">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-secondary pl-4 py-1 my-6 italic text-text-main/70 bg-secondary/10 pr-4 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-text-main/80 ml-4">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-text-main/80 ml-4">
                {children}
            </ol>
        ),
    },
}
