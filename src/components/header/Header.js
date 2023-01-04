import React from "react";
import newheader from './newheader.jpeg'
import './Header.css'
import { SearchBar } from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import { popular } from "../arcticleLIst/articleSlice";
import { useDispatch } from "react-redux";
export function Header(){
    const dispatch=useDispatch()
    return(
        <div className="header">
            <SearchBar className="searchBar"/>
            <img src={newheader}/>
            <Link to='/' id='home'>Home</Link>
            <Link to ='/popular' id='popular'><button onClick={()=>dispatch(popular())}>popular</button></Link>
        </div>
    )
}