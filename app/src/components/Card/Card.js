import React from 'react';
import './Card.css'
import Arrow from '../../Svgs'

const Card = ({item}) => {

    console.log(item)

    return(
        <div id="Card" className="github">
            <h3>Stack Overflow</h3>
            <div className="Card__Owner">
                <img src={item.owner.profile_image}/>
                <div className="Card__Owner-Name">
                    <span>{item.owner.display_name}</span>
                </div>
            </div>
            <a target="blank" href={item.link} className="btn">
                <Arrow/>
            </a>
            <h1>{item.title}</h1>
        </div>
    )
}

export default Card