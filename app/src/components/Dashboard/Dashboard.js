import React from 'react';
import Card from '../Card/Card';
import './Dashboard.css'

import Mock from '../../Mock';

const Dashboard = () => {

    const { items } = Mock

    return (

      <div id="Dashboard">
        {items.map((item, index) => (
            <Card item={item}/>
        ))
        }
      </div>
    )
}

export default Dashboard