# The Office Explorer

Aplicação Next.js que demonstra **SSG**, **SSR** e **Data Fetching** no App Router.

## 🎯 Objetivo

Projeto prático para fixar conceitos de renderização no Next.js usando [The Office API](https://theofficeapi.dev/).

## Demonstração

![Demo](./public/gif.gif)

## Estrutura

```
app/
├── page.js                    # Home (SSG)
├── characters/
│   ├── page.js               # Lista de personagens (SSR com paginação)
│   └── [id]/page.js          # Detalhe do personagem (SSR)
└── layout.js
```

## 🔑 Conceitos Aplicados

| Conceito | Onde | Como |
|----------|------|------|
| **SSG** | `app/page.js` | Conteúdo estático pré-renderizado |
| **SSR** | `app/characters/page.js` | `cache: 'no-store'` (renderiza a cada request) |
| **SSR** | `app/characters/[id]/page.js` | `cache: 'no-store'` (renderiza a cada request) |
| **Server Components** | Todas as páginas | `async/await` direto, sem `useEffect` |
| **App Router** | Estrutura | Roteamento moderno do Next.js |
| **Dynamic Routing** | `app/characters/[id]` | Rotas dinâmicas com parâmetros |

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
- ✅ Roteamento dinâmico no App Router
- ✅ Paginação com query parameters (`?page=2`)
- ✅ Manutenção de estado via URL

## 🔗 API

[The Office API](https://theofficeapi.dev/) - API pública sem autenticação.
