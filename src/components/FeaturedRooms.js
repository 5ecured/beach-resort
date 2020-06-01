import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

const FeaturedRooms = () => {
    const value = useContext(RoomContext)
    console.log('value is', value)
    const { loading, featuredRooms: rooms } = value

    let displayRooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    })

    return (
        <section className='featured-rooms'>
            <Title title='Featured rooms' />
            <div className='featured-rooms-center'>
                {loading ? <Loading /> : displayRooms}
            </div>
        </section >
    )
}

export default FeaturedRooms