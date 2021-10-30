import React from 'react'
import { Link } from "react-router-dom"

import LogoPicture from "../../../static/assets/images/jen-tattoo-logo-drawn.jpg";

export default function Home() {
    LogoPicture
    return (
        <div className='home-wrapper'>
            <h1>Welcome to JenTattoo!</h1>
            <div className="home-buttons-wrapper">
                <Link to="/items">See all my items</Link>
                <Link to="/add-item">Add an item</Link>
                <Link to="/about">About JenTattoo</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    )
}