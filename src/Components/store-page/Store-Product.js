import React from 'react';

export default ({item}) => (
    <article id={"beer-" + item.id}
             className='col-xs-12 col-sm-6 col-md-4 col-lg-3 center'>
        <img src = {item.img}
             height={200} />
        <h5>{item.title}</h5>
        <p>{item.summary}</p>
        <button className="button-primary"> Buy for ${item.cost} </button>
    </article >
);