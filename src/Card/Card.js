import React from 'react';

const card = (props) => {
    return <div className='Card'>
        <p>Username: {props.name}</p>
        <p>I hope I'll be overwritten</p>
    </div>;
};

export default card;
