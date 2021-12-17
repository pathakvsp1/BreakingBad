import React from 'react'
import CharacterItem from './CharacterItems'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem  item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid