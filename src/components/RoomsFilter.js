import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext)

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
    
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]

    types = types.map((item, i) => {
        return (
            <option value={item} key={i}>{item}</option>
        )
    })

    return (
        <section className='filter-container'>
            <Title title='Search rooms' />
            <form className='filter-form'>
                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type'>Room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type */}
            </form>
        </section>
    )
}

export default RoomsFilter