import React from 'react'
import { NavLink } from "react-router-dom"


export default function Nav() {

    return (
        <div className='nav_img_wrapper'>
            <img className='nav_img' src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/12235085_1054334174597754_5961771039636146966_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=o19bkl1qve8AX8ITKb-&_nc_ht=scontent-dfw5-1.xx&oh=0f76b1954a675480f602c7a9a8a91acf&oe=61A36675'/>


            <div className='nav-wrapper'>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/add-item">Add Item</NavLink>
                <NavLink to="/about">About JenTattoo</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
        </div>
    )
}