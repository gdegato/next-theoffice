export default function About() {
  const concepts = [
    { title: 'SSG (Static Site Generation)', description: 'Home page - Conteúdo estático pré-renderizado' },
    { title: 'SSR (Server-Side Rendering)', description: 'Lista e detalhes - Renderiza a cada request' },
    { title: 'Server Components', description: 'Fetch direto no servidor com async/await' },
    { title: 'Dynamic Routing', description: 'Rotas dinâmicas com parâmetros [id]' }
  ]

  const learnings = [
    'Diferença prática entre SSG e SSR',
    'Quando usar cada estratégia de renderização',
    'Fetch no servidor com Server Components',
    'Roteamento dinâmico no App Router',
    'Paginação com query parameters (?page=2)',
    'Manutenção de estado via URL'
  ]

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objetivo</h2>
        <p className="text-lg leading-relaxed">
          Projeto prático para fixar conceitos de renderização no Next.js usando a{' '}
          <a
            href="https://theofficeapi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            The Office API
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conceitos Aplicados</h2>
        <dl className="space-y-4">
          {concepts.map((concept) => (
            <div key={concept.title}>
              <dt className="font-semibold text-lg">{concept.title}</dt>
              <dd className="text-gray-600 ml-4">{concept.description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Aprendizados</h2>
        <ul className="list-disc list-inside space-y-2">
          {learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Estrutura do Projeto</h2>
        <pre className="bg-gray-50 border border-gray-200 p-6 rounded text-sm overflow-x-auto font-mono text-gray-900">
{`app/
├── page.js                    # Home (SSG)
├── characters/
│   ├── page.js               # Lista (SSR com paginação)
│   └── [id]/page.js          # Detalhe (SSR)
├── about/
│   └── page.js               # Documentação
└── layout.js                  # Layout global`}
        </pre>
      </section>
    </main>
  )
}