import React, { Fragment } from 'react'
import Hero from '../Hero'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import Services from '../Services'
import FeaturedRooms from '../FeaturedRooms'

const Home = () => {
    return (
        <Fragment>
            <Hero>
                <Banner title='Luxurious rooms' subtitle='Deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        Our rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </Fragment>
    )
}

export default Home