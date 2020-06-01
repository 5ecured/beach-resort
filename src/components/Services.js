import React, { useState } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Services = () => {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail />,
            title: 'Free cocktails',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            icon: <FaHiking />,
            title: 'Endless hiking',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free shuttle service',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            icon: <FaBeer />,
            title: 'Strongest beer',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ])

    return (
        <section className='services'>
            <Title title='Services' />
            <div className='services-center'>
                {services.map((item, i) => {
                    return (
                        <article key={i} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services