import React from 'react'
import ActorCard from './ActorCard'

import IMAGE_NOT from '../../images/not-found.png'

const ActorGrid = ({data}) => {
    return (
        <div>
            {data.map(({person}) => <ActorCard 
                key = {person.id}
                name = {person.name}
                country = {person.country ? person.country.name : null}
                birthday = {person.birthday}
                deathday = {person.deathday}
                gender = {person.gender}
                image = {person.image ? person.image.medium : IMAGE_NOT}
            />)}
        </div>
    )
}

export default ActorGrid
