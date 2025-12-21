import Link from 'next/link'

export function Header() {
    return (
        <header className="py-6 border-b border-border bg-base/80 sticky top-0 backdrop-blur-sm z-10">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-text-main hover:text-accent transition-colors">
                    Sanity Blog
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="text-text-main hover:text-accent transition-colors font-medium">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
