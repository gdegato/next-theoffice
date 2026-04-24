# The Office Explorer

Aplicação Next.js que demonstra **SSG**, **SSR** e **Data Fetching** no App Router.

## 🎯 Objetivo

Projeto prático para fixar conceitos de renderização no Next.js usando [The Office API](https://theofficeapi.dev/).

## 🏗️ Estrutura

```
app/
├── page.js                    # Home (SSG)
├── characters/
│   ├── page.js               # Lista de personagens (SSG + Revalidação)
│   └── [id]/page.js          # Detalhe do personagem (SSR)
└── layout.js
```

## 🔑 Conceitos Aplicados

| Conceito | Onde | Como |
|----------|------|------|
| **SSG** | `app/page.js` | Conteúdo estático pré-renderizado |
| **SSG + Revalidação** | `app/characters/page.js` | `revalidate: 3600` (atualiza a cada 1h) |
| **SSR** | `app/characters/[id]/page.js` | `cache: 'no-store'` (renderiza a cada request) |
| **Server Components** | Todas as páginas | `async/await` direto, sem `useEffect` |
| **App Router** | Estrutura | Roteamento moderno do Next.js |

## 🚀 Como Rodar

```bash
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📚 Aprendizados

- ✅ Diferença prática entre SSG e SSR
- ✅ Quando usar cada estratégia de renderização
- ✅ Fetch no servidor com Server Components
- ✅ Revalidação automática de dados estáticos
- ✅ Roteamento dinâmico no App Router

## 🔗 API

[The Office API](https://theofficeapi.dev/) - API pública sem autenticação.
