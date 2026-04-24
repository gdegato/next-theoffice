import CharactersDetails from '@/app/components/charactersDetails'
import React from 'react'
import { notFound } from 'next/navigation'

async function CharactersDetailsPage({ params }) {
  const resolvedParams = await params
  const id = Number(resolvedParams.id)

  let character = null
  let currentPage = 1
  const limit = 20

  while (!character) {
    const response = await fetch(`https://theofficeapi.dev/api/characters?page=${currentPage}&limit=${limit}`, {
      cache: 'no-store'
    })
    const data = await response.json()
    character = data.results.find(c => c.id === id)

    if (!character && !data.meta.nextPage) {
      break
    }
    currentPage++
  }

  if (!character) {
    notFound()
  }

  return (
    <CharactersDetails character={character} />
  )
}

export default CharactersDetailsPage