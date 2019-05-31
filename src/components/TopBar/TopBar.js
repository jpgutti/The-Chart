import React, { useState } from 'react';
import Form from '../Form/Form';
import './TopBar.css'

const TopBar = () => {

    const [isMenuOpen, setMenu] = useState(false)

    return(
        <div id="TopBar">
            <div onClick={() => setMenu(!isMenuOpen)} className={`Burguer__Menu ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>The <strong>Charts</strong></h1>
            <div className={`Menu ${isMenuOpen ? "active" : ""}`}>
                <Form/>
            </div>
        </div>
    )
}

export default TopBar