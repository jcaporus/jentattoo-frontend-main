import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to JenTattoo!</h1>

            <div className="home-img-wrapper">
                <img className='home_img' src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/1380168_716301278401047_1154412788_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=jK792TgfacMAX81Mm_r&_nc_ht=scontent-dfw5-1.xx&oh=fea5c881724b7f8671ae315de23cbb3d&oe=61A04FA0'/>
                <img className='home_img' src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/1779298_716301101734398_1388693966_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=l3lQezua-7sAX8DvhDJ&_nc_ht=scontent-dfw5-2.xx&oh=29020e895c8e8f0527d66f397c6c5774&oe=61A1F646'/>
                <img className='home_img' src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/1383568_633728119991697_996337092_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Tvhw7EdXLPEAX_Jcd0m&_nc_ht=scontent-dfw5-1.xx&oh=250b715404a33e237b51aed51de0e628&oe=61A189AC'/>
                <img className='home_img' src='https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/1981874_716301131734395_278247913_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=jVLgicHL5DgAX-ONANE&_nc_ht=scontent-dfw5-1.xx&oh=ddf5f1b1fd34a65b3f013a04fc066d9e&oe=61A325CF'/>
            </div>

            <div className="home-buttons-wrapper">
                <Link to="/items">See all my items</Link>
                <br>
                </br>
                <Link to="/add-item">Add an item</Link>
                <br>
                </br>
                <Link to="/about">About JenTattoo</Link>
                <br>
                </br>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
    )
}