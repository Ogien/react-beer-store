import React from 'react';
import Product from './Store-Product';

export default ({beers}) => (
    <section id='warehouse' className="row">
        { beers.map((beer, i) => <Product key={i} item={beer} />) }
    </section>
);

