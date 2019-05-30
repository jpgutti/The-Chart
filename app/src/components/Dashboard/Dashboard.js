import React from 'react';
import Card from '../Card/Card';
import './Dashboard.css'

const Dashboard = ({stack}) => {
    
    const { data: { items }} = stack

    return (

      <div id="Dashboard">
        {items.map((item, index) => (
            <Card key={index} source={stack.origin} item={item}/>
        ))
        }
      </div>
    )
}

export default Dashboard