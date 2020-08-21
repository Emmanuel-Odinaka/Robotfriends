import React from 'react';

import Card from './Card';
const CardArray = ({ robot }) => {
    return (<div>
        {
            robot.map((user, i) => {
                return (
                    <Card 
                    key={i}
                    id={robot[i].id} 
                    name={robot[i].name} 
                    email={robot[i].email} 
                    color={robot[i].color}
                    />
                );
            })
        }
    </div>
    );
}
export default CardArray;