import React, { useState, useContext, Fragment } from 'react'
import defaultBc from '../../images/room-1.jpeg'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../../context'
import StyledHero from '../StyledHero'

const SingleRoom = (props) => {
    const [slug, setSlug] = useState(props.match.params.slug)
    const [defaultBcg, setDefaultBcg] = useState(defaultBc)
    const value = useContext(RoomContext)

    const { getRoom } = value
    const room = getRoom(slug)

    if (!room) {
        return (<div className='error'>
            <h3>No such room could be found</h3>
            <Link to='/rooms' className='btn-primary'>
                Back to rooms
            </Link>
        </div>)
    }

    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    const [mainImg, ...defaultImg] = images
    console.log(defaultImg)

    return (
        <Fragment>
            <StyledHero img={mainImg || defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {defaultImg.map((image, i) => {
                        return (
                            <img key={i} src={image} alt='a' />
                        )
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>Info</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size}SQFT</h6>
                        <h6>
                            Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? 'Pets allowed' : 'No pets allowed'}</h6>
                        <h6>{breakfast && 'Free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>Extras</h6>
                <ul className='extras'>
                    {extras.map((extra, i) => {
                        return (
                            <li key={i}>
                                - {extra}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </Fragment>
    )
}

export default SingleRoom