// import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react' 
import { fetchUsers } from "./userSlice"


export const User = () => {

    const users = useSelector(state => state.user)
    const searchValue = useSelector(state => state.search.value)

    const dispatch = useDispatch()
    
    console.log(searchValue)
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="users-list">
            { users.loading && <div>Loading...</div> }
            { !users.loading && users.error ? <div>Error!!!</div> : null }
            { !users.loading && users.users ? (
                users.users.filter((user) => {
                    if(searchValue === '') {
                        return user
                    } else if(user.name.toLowerCase().includes(searchValue.toLowerCase()) || user.email.toLowerCase().includes(searchValue.toLowerCase()) || user.address.street.toLowerCase().includes(searchValue.toLowerCase()) || user.address.city.toLowerCase().includes(searchValue.toLowerCase())) {
                        return user
                    }
                }).map((user) => (
                    <div className="user-details" key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode.slice(0, 5)}</p>
                        
                    </div>
                ))
            ) : null }
        </div>
    )
}