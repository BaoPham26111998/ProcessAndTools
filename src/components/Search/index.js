import React from "react";
import { Nav, Bars, NavBtn, NavBtnLink } from 'components/Navbar/navbarElements';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <Nav>
                <Bars />
                <NavBtn>
                    <NavBtnLink to='/Search'>Advance Search</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}