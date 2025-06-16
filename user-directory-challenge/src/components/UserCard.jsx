import React from 'react';

function UserCard({ name, email, city }){
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    )
}
export default UserCard