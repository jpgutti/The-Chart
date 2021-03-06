import React, { useState } from 'react';
import './Card.css'
import { Arrow, Heart, HeartOutline} from '../../Svgs'

const Card = ({item, source}) => {

    const [fav, setFav] = useState(false);


    function getSource(src){
        switch(src){
            case "Stack":
                return "Stack Overflow"
            default:
                return null
        }
    }


    function normalizeTitle(str){
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    }

    return(
        <div id="Card" className="github">
            <h3>{getSource(source)}</h3>
            <div className="Card__Owner">
                <img alt="" src={item.owner.profile_image}/>
                <div className="Card__Owner-Name">
                    <span>{item.owner.display_name}</span>
                </div>
            </div>
            <a target="blank" href={item.link} className="btn">
                <Arrow/>
            </a>
            <div className="Favorite">
                <HeartOutline/>
            </div>
            <h1>{normalizeTitle(item.title)}</h1>
        </div>
    )
}

export default Card