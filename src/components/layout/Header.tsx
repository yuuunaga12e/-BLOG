import Link from 'next/link'

export function Header() {
    return (
        <header className="py-6 border-b border-border bg-base/80 sticky top-0 backdrop-blur-sm z-10">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <Link href="/" className="text-[28px] font-bold text-text-main hover:text-accent transition-colors">
                        Lynx Base
                    </Link>
                    <p className="text-sm text-text-main/70 mt-1">
                        日々のこと、学んだことを徒然なるままに書き綴っています。
                    </p>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="text-text-main hover:text-accent transition-colors font-medium">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/studio" target="_blank" className="text-text-main hover:text-accent transition-colors font-medium">
                                Admin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
