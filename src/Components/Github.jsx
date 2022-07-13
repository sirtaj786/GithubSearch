import React, { useState,useEffect } from 'react'
import fetchUser from './fetchUser'
import Card from './Card'
const Github = () => {
    const [query,setQuery]=useState("")
    const[isLoading,setIsLoading]=useState(false)
    const[isError,setIsError]=useState(false)
    const[users,setUsers]=useState([])
    const handleSearch=()=>{
        setIsLoading(true)
        fetchUser(query)
        .then(res=>{
        setUsers(res.data.items)
        })
        .catch(err=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    useEffect=((query,page,limit)=>{
        fetchUser(`query?_page=${page}&_limit={limit}`)
    },[])

    
  return (
    <div>
        <h1>Github</h1>
        <div>
            <input value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search"
            />
            <button disabled={isLoading} onClick={handleSearch}>{isLoading? "Loading":"SEARCH"}</button>
        </div>
        
           
            <Card users={users}/>
        
    </div>
  )
}

export default Github