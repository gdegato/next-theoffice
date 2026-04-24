import Link from 'next/link'

async function Characters({ searchParams }) {
    const resolvedSearchParams = await searchParams
    const page = resolvedSearchParams.page || 1
    const limit = 20


    const response = await fetch(`https://theofficeapi.dev/api/characters?page=${page}&limit=${limit}`, {
        cache: 'no-store'
    })

// O export const dynamic = 'force-static' estava forçando a página a ser estática (SSG), 
// entao ela era pré-renderizada no build com page=1 e não conseguia responder aos parâmetros de
// URL dinâmicos.
// para ser (SSG) seria necessário usar generateStaticParams para pré-gerar todas as 9 páginas no build.

    const data = await response.json()

    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Characters - Page {page}</h1>
            
            <div className="grid grid-cols-5 gap-4 mb-8">
                {data.results.map((character) => (
                    <Link
                        key={character.id}
                        href={`/characters/${character.id}?from=${page}`}
                        className="block p-4 border rounded hover:bg-gray-50 transition"
                    >
                        <h2 className="text-xl font-semibold">{character.name}</h2>
                    </Link>
                ))}
            </div>

            <nav className="flex gap-4">
                {data.meta.previousPage && (
                    <Link
                        href={`/characters?page=${data.meta.previousPage}`}
                        className="text-blue-600 hover:underline"
                    >
                        ← Previous
                    </Link>
                )}
                {data.meta.nextPage && (
                    <Link
                        href={`/characters?page=${data.meta.nextPage}`}
                        className="text-blue-600 hover:underline"
                    >
                        Next →
                    </Link>
                )}
            </nav>
        </main>
    )
}

export default Characters