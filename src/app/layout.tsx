import Link from "next/link";
import "./globals.css"

export const metadata = {
    title: "Wardle Works",
    description: "cutting edge projects and prototypes"
}

export default function RootLayout({
    children,}:{children:React.ReactNode
}){
    return (
        <html lang="en">
    <body>
    <header className="header">
        <h1>Wardle Works</h1>
        <Link className="links" href="/about">About Us</Link>
        <Link className="links" href="/contact">Contact Us</Link>
    </header>
    {children}
    <footer className="footer">
        <div>
        <div>
            <h3>Contact Us</h3>
            <h3>828-335-8868</h3>
        </div>

        <div>
            <h3>Our Projects</h3>
            <h3><Link href="https://github.com/lwardlegit?tab=repositories">Lwardlegit</Link></h3>
        </div>
        </div>

    </footer>
    </body>
    </html>
    )
}