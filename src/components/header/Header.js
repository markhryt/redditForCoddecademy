import React from "react";
import newheader from './newheader.jpeg'
import './Header.css'
import { SearchBar } from "../searchbar/SearchBar";
export function Header(){
    return(
        <div className="header">
            <SearchBar className="searchBar"/>
            <img src={newheader}/>
        </div>
    )
}