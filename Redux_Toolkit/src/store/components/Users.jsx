import React, { useEffect } from "react";
import { fetchUser } from "../features/thunk/extraReducers"
import { useDispatch, useSelector} from "react-redux"
const Users = () => {
const users = useSelector(state => state.user.users)    
const loading = useSelector(state => state.user.loading)

const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser())
    },[])
    if(loading) return <p>Loading....</p>
  return (

    <>
    {users.map((user,index) => (
        <p key={index}>Name: {user.name}</p>
    ))}
    </>
  )
};

export default Users;

