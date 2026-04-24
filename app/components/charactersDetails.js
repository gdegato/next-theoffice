import Link from 'next/link'

function CharactersDetails({ character, fromPage }) {

    return (
        <main className="max-w-4xl mx-auto p-8">
            <Link href={`/characters?page=${fromPage}`} className="text-blue-600 hover:underline mb-4 inline-block">
                ← Back to Characters
            </Link>

            <h1 className="text-4xl font-bold mb-6">{character.name}</h1>

            {character.job?.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Jobs</h2>
                    {character.job.map((j, index) => (
                        <p key={`job-${index}`} className="ml-4">• {j}</p>
                    ))}
                </div>
            )}

            {character.workplace?.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Workplaces</h2>
                    {character.workplace.map((w, index) => (
                        <p key={`workplace-${index}`} className="ml-4">• {w}</p>
                    ))}
                </div>
            )}

            <div className="space-y-2 mt-6">
                <p><strong>Marital Status:</strong> {character.marital || 'Unknown'}</p>
                <p><strong>First Appearance:</strong> {character.firstAppearance || 'Unknown'}</p>
                <p><strong>Last Appearance:</strong> {character.lastAppearance || 'Unknown'}</p>
                {character.gender === "Female" ? (
                    <p><strong>Actress: {character.actor} </strong></p>
                ) : (
                    <p><strong>Actor: {character.actor}</strong></p>
                )}
            </div>
        </main >
    )
}

export default CharactersDetails