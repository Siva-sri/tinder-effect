import React from 'react'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'red',
    url: './images/red.jpg'
  },
  {
    name: 'orange',
    url: './images/orange.jpg'
  },
  {
    name: 'yellow',
    url: './images/yellow.jpg'
  },
  {
    name: 'green',
    url: './images/green.jpg'
  },
  {
    name: 'blue',
    url: './images/blue.jpg'
  }
]

function Simple () {
  const characters = db
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    console.log(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + ' left!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)} swipeRequirementType='position'>
            <div style={{backgroundImage: 'url(' + require('./images/'+character.name+'.jpg') + ')'}} className='card'>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
  )
}

export default Simple