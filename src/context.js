// // import React, { useState, useEffect } from 'react'
// // import items from './data'

// // const RoomContext = React.createContext()

// // const RoomProvider = ({ children }) => {
// //     const [state, setState] = useState({
// //         rooms: [],
// //         sortedRooms: [],
// //         featuredRooms: [],
// //         loading: true,
// //         type: 'all',
// //         capacity: 1,
// //         price: 0,
// //         minPrice: 0,
// //         maxPrice: 0,
// //         minSize: 0,
// //         maxSize: 0,
// //         breakfast: false,
// //         pets: false
// //     })

// //     const formatData = items => {
// //         let tempItems = items.map(item => {
// //             let id = item.sys.id
// //             let images = item.fields.images.map(image => image.fields.file.url)
// //             let room = { ...item.fields, images, id }
// //             return room
// //         })
// //         return tempItems
// //     }

// //     const getRoom = slug => {
// //         let tempRooms = [...state.rooms]
// //         const room = tempRooms.find(room => room.slug === slug)
// //         return room
// //     }

// //     useEffect(() => {
// //         let rooms = formatData(items)
// //         let featuredRoomsTemp = state.rooms.filter(room => room.featured)
// //         let maxPrice = Math.max(...state.rooms.map(item => item.price))
// //         let maxSize = Math.max(...state.rooms.map(item => item.size))

// //         setState({
// //             ...state,
// //             rooms,
// //             featuredRooms: featuredRoomsTemp,
// //             sortedRooms: rooms,
// //             loading: false,
// //             price: maxPrice,
// //             maxPrice,
// //             maxSize
// //         })
// //     }, [])

// //     //I think the way to make changes with dropdown/range/checkbox/radio etc is:
// //     //1. have a state that can be changed (in this case, "type" - it can be single/family/double/presidential etc.)
// //     //2. whenever the element is changed, do an onChange whose purpose is to change the state - which is "type" (in this case, "handleChange" with the [name]: value)
// //     //3. based on that state ("type"), render different things

// //     const handleChange = e => {
// //         const target = e.target
// //         const value = e.type === 'checkbox' ? target.checked : target.value
// //         const name = e.target.name

// //         setState({
// //             ...state,
// //             [name]: value //name is "type", one of the many states. the actual name of the dropdown element. value is 'single', 'double', 'family, etc.
// //         })
// //         filterRooms()
// //     }

// //     const filterRooms = () => {
// //         let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = state
// //         let tempRooms = [...rooms]
// //         if (type !== 'all') {
// //             tempRooms = tempRooms.filter(room => room.type === type)
// //         }

// //         setState({
// //             ...state,
// //             sortedRooms: tempRooms
// //         })
// //     }

// //     return (
// //         <RoomContext.Provider value={{
// //             ...state,
// //             getRoom,
// //             handleChange
// //         }}>
// //             {children}
// //         </RoomContext.Provider>
// //     )
// // }

// // const RoomConsumer = RoomContext.Consumer

// // export function withRoomConsumer(Component) {
// //     return function ConsumerWrapper(props) {
// //         return <RoomConsumer>
// //             {value => <Component {...props} context={value} />}
// //         </RoomConsumer>
// //     }
// // }

// // export { RoomProvider, RoomConsumer, RoomContext }


// /************************************************************************************************************************** */

// import React, { useState, useEffect } from 'react'
// import items from './data'

// const RoomContext = React.createContext()

// const RoomProvider = ({ children }) => {
//     const [state, setState] = useState({
//         rooms: [],
//         sortedRooms: [],
//         featuredRooms: [],
//         loading: true,
//         type: 'all',
//         capacity: 1,
//         price: 0,
//         minPrice: 0,
//         maxPrice: 0,
//         minSize: 0,
//         maxSize: 0,
//         breakfast: false,
//         pets: false
//     })

//     const formatData = items => {
//         let tempItems = items.map(item => {
//             let id = item.sys.id
//             let images = item.fields.images.map(image => image.fields.file.url)
//             let room = { ...item.fields, images, id }
//             return room
//         })
//         return tempItems
//     }

//     const getRoom = slug => {
//         let tempRooms = [...state.rooms]
//         const room = tempRooms.find(room => room.slug === slug)
//         return room
//     }

//     useEffect(() => {
//         let rooms = formatData(items)
//         let featuredRoomsTemp = rooms.filter(room => room.featured)
//         let maxPrice = Math.max(...state.rooms.map(item => item.price))
//         let maxSize = Math.max(...state.rooms.map(item => item.size))

//         setState({
//             ...state,
//             rooms,
//             featuredRooms: featuredRoomsTemp,
//             sortedRooms: rooms,
//             loading: false,
//             price: maxPrice,
//             maxPrice,
//             maxSize
//         })
//     }, [])

//     //I think the way to make changes with dropdown/range/checkbox/radio etc is:
//     //1. have a state that can be changed (in this case, "type" - it can be single/family/double/presidential etc.)
//     //2. whenever the element is changed, do an onChange whose purpose is to change the state - which is "type" (in this case, "handleChange" with the [name]: value)
//     //3. based on that state ("type"), render different things

//     const handleChange = e => {
//         const target = e.target
//         const value = e.type === 'checkbox' ? target.checked : target.value
//         const name = e.target.name

//         setState({
//             ...state,
//             [name]: value, //name is "type", one of the many states. the actual name of the dropdown element. value is 'single', 'double', 'family, etc.
//             sortedRooms: filterRooms(value)
//         })
//     }

//     const filterRooms = (type) => {
//         let { rooms, capacity, price, minSize, maxSize, breakfast, pets } = state
//         capacity = Number(capacity)
//         console.log(capacity)

//         if (type !== 'all') {
//             return rooms.filter(room => room.type === type)
//         }

//         if (capacity !== 1) {
//             return rooms.filter(room => room.capacity >= capacity)
//         }

//     }

//     // useEffect(() => {
//     //     if (state.rooms.length > 0) {
//     //         setState({
//     //             ...state,
//     //             sortedRooms: filterRooms()
//     //         })
//     //     }
//     // }, [state.type])

//     return (
//         <RoomContext.Provider value={{
//             ...state,
//             getRoom,
//             handleChange
//         }}>
//             {children}
//         </RoomContext.Provider>
//     )
// }

// const RoomConsumer = RoomContext.Consumer

// export function withRoomConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return <RoomConsumer>
//             {value => <Component {...props} context={value} />}
//         </RoomConsumer>
//     }
// }

// export { RoomProvider, RoomConsumer, RoomContext }

/********************************************************************** */

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
        pets: false,
    })

    const formatData = (items) => {
        let tempItems = items.map((item) => {
            let id = item.sys.id
            let images = item.fields.images.map((image) => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    const getRoom = (slug) => {
        let tempRooms = [...state.rooms]
        const room = tempRooms.find((room) => room.slug === slug)
        return room
    }

    useEffect(() => {
        let rooms = formatData(items)
        let featuredRoomsTemp = rooms.filter((room) => room.featured)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        console.log('maxprce is ', maxPrice)

        setState({
            ...state,
            rooms,
            featuredRooms: featuredRoomsTemp,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize,
        })
    }, [])

    //I think the way to make changes with dropdown/range/checkbox/radio etc is:
    //1. have a state that can be changed (in this case, "type" - it can be single/family/double/presidential etc.)
    //2. whenever the element is changed, do an onChange whose purpose is to change the state - which is "type" (in this case, "handleChange" with the [name]: value)
    //3. based on that state ("type"), render different things.

    const handleChange = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name

        setState({
            ...state,
            [name]: value, //name is "type", one of the many states. the actual name of the dropdown element. value is 'single', 'double', 'family, etc.
        })
    }

    const filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
        } = state

        let tempRooms = [...rooms]
        capacity = Number(capacity)
        price = Number(price)

        //filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)

        //filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //filter by breakfast
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast)
        }

        //filter by pets
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets)
        }

        setState({
            ...state,
            sortedRooms: tempRooms,
        })
    }

    useEffect(() => {
        if (state.rooms.length > 0) {
            filterRooms()
        }
    }, [state.type, state.capacity, state.price, state.minSize, state.maxSize, state.breakfast, state.pets])


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
        return (
            <RoomConsumer>
                {(value) => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

export { RoomProvider, RoomConsumer, RoomContext }