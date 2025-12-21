export function Footer() {
    return (
        <footer className="py-8 bg-secondary mt-auto">
            <div className="container mx-auto px-4 text-center text-text-main text-sm">
                <p>&copy; {new Date().getFullYear()} My Sanity Blog. All rights reserved.</p>
            </div>
        </footer>
    )
}
