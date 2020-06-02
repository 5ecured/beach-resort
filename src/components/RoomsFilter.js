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

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, i) => {
        return (
            <option key={i} value={item}>{item}</option>
        )
    })


    /*
    For the below:
    -htmlFor usually matches id. 
    -label is so that you can click anywhere in that element and it will register.
    -name has to match state so you can do [name]: value
    */
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
                {/* guest */}
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end guest */}
                {/* room price */}
                <div className='form-group'>
                    <label htmlFor='price'>Room price ${price}</label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>
                {/* end room price */}
                {/* size */}
                <div className='form-group'>
                    <label htmlFor='size'>Room size (sqft)</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                    </div>
                </div>
                {/* end size */}
                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                        <label htmlFor='breakfast'>Breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                        <label htmlFor='pets'>Pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}

export default RoomsFilter