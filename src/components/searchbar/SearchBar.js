import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { searchFor } from "../arcticleLIst/articleSlice";
export function SearchBar(){
    const [searchTerm, setSearchTerm]=useState('')
    const dispatch=useDispatch()
    dispatch(searchFor(searchTerm))
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
    }
    return(
        <div className="searchBar">
            <input type="text" placeholder="Search..." onChange={handleChange} id='searchbar'/>
            <button onClick={()=>document.getElementById('searchbar').value=''}>x</button>
            <button onClick={()=>dispatch(searchFor(searchTerm))}>Search</button>
        </div>
    )
}