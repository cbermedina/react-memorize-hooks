import React,{useEffect} from 'react'

const Item = ({ user, handleDelete }) => {
    useEffect(()=>{
        console.log("Item Render "+user.name)
    })
    return (
        <li key={user.id.toString()}>
            {user.name}
            <button onClick={()=>{handleDelete(user.id)}}>Delete</button>
        </li>
    )
}

export default React.memo(Item)
