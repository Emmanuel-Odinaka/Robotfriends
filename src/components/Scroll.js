import React from 'react';
const Scroll = (props) => {
    return(
        <div style={{overflowY:"scroll", border: "2px solid purple", height: '400px'}}>
            {props.children}
        </div>
    )
};
export default Scroll;