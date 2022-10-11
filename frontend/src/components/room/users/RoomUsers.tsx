import React from 'react'
import User from './User'
import { UserType } from '../roomTypes'

const RoomUsers:React.FC<{users: Array<UserType>}> = ({users}) => {
    return (
    <div className="users_wrapper">
        <h2 className="users_title">Room users</h2>
        <div className="users_list">
            {users.map((user, index) => {
                return <User user={user} key={index} />
                })}
        </div>
    </div>
    )
}

export default RoomUsers