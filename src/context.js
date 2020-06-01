import React, { useState, useEffect } from 'react'
import items from './data'

const RoomContext = React.createContext()

const RoomProvider = ({ children }) => {
    const [state, setState] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    })

    const formatData = items => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    const getRoom = slug => {
        let tempRooms = [...state.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }

    useEffect(() => {
        let rooms = formatData(items)
        let featuredRoomsTemp = state.rooms.filter(room => room.featured)
        let maxPrice = Math.max(...state.rooms.map(item => item.price))
        let maxSize = Math.max(...state.rooms.map(item => item.size))

        setState({
            ...state,
            rooms,
            featuredRooms: featuredRoomsTemp,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }, [])

    //I think the way to make changes with dropdown/range/checkbox/radio etc is:
    //1. have a state that can be changed (in this case, "type" - it can be single/family/double/presidential etc.)
    //2. whenever the element is changed, do an onChange whose purpose is to change the state - which is "type" (in this case, "handleChange" with the [name]: value)
    //3. based on that state ("type"), render different things

    const handleChange = e => {
        const target = e.target
        const value = e.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name

        setState({
            ...state,
            [name]: value //name is "type", one of the many states. the actual name of the dropdown element. value is 'single', 'double', 'family, etc.
        })
        filterRooms()
    }

    const filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = state

        let tempRooms = [...rooms]
        if (type !== 'all') {
            console.log('NOT ALL')
            tempRooms = tempRooms.filter(room => room.type === type)
            console.log(tempRooms)
        }

        setState({
            ...state,
            sortedRooms: tempRooms
        })
    }

    return (
        <RoomContext.Provider value={{
            ...state,
            getRoom,
            handleChange
        }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext }

