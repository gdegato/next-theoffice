# The Office Explorer

Este projeto é uma aplicação Next.js construída para aprender mais sobre o App Router, Server Components e rotas dinâmicas.

## 🎯 Objetivo do Projeto

- Aprender conceitos modernos do Next.js 16
- Experimentar rotas dinâmicas com `app/characters/[id]/page.js`
- Entender fetch no servidor e renderização dinâmica
- Praticar paginação com query params no App Router

## 📂 Estrutura do Projeto

```
app/
├── page.js                    # Home com link para personagens
├── about/page.js              # Página sobre o projeto
├── characters/page.js         # Lista de personagens paginada
├── characters/[id]/page.js    # Detalhe de personagem via rota dinâmica
├── layout.js                  # Layout global e Header
├── globals.css                # Estilos globais
└── components/
    ├── header.js             # Navegação comum
    └── charactersDetails.js  # Componente de detalhe do personagem
```

## 🚀 Como Rodar

1. Instale dependências

```bash
npm install
```

2. Execute o servidor de desenvolvimento

```bash
npm run dev
```

3. Abra no navegador

```text
http://localhost:3000
```

## 💡 O que este app faz

- Página inicial com link para a lista de personagens
- Lista de personagens carregada de `https://theofficeapi.dev/api/characters`
- Paginação via `?page=1`, `?page=2` etc.
- Detalhe de personagem usando rota dinâmica `app/characters/[id]`
- Botão de volta que preserva a página de origem via query string `from`

## 🔧 Tecnologias usadas

- `next@16.2.4`
- `react@19.2.4`
- `react-dom@19.2.4`
- `tailwindcss@4`
- `eslint@9`
- `eslint-config-next@16.2.4`

## 🧠 Aprendizados importantes

- `app/characters/page.js` usa fetch no servidor e `cache: 'no-store'` para gerar HTML dinâmico a cada request
- `app/characters/[id]/page.js` é uma rota dinâmica que lê `params.id`
- `Link` do `next/link` mantém navegação cliente sem recarregar a página
- `searchParams` permite ler `?page=` e `?from=` no App Router
- `notFound()` do `next/navigation` mostra 404 quando o personagem não é encontrado

---