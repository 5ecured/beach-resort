import React, { Fragment } from 'react'
import Hero from '../Hero'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../RoomsContainer'

const Rooms = () => {
    return (
        <Fragment>
            <Hero hero='roomsHero'>
                <Banner title='Our rooms'>
                    <Link to='/' className='btn-primary'>Return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </Fragment>
    )
}

export default Rooms