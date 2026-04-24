import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h2>The NEXT Office App</h2>
            <Link href="/" className="mr-4 hover:underline">
                Home
            </Link>
            <Link href="/characters" className="hover:underline">
                Characters
            </Link>
        </header>
    )
}

export default Header