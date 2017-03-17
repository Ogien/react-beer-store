import React, {Component} from 'react';
import Rebase from 're-base';

const base = Rebase.createClass('https://beer-store.firebaseio.com/');

export default class CheckoutBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        base.syncState('cart', {
            context: this,
            state: 'cart',
            asArray: true
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    handleCartTotals = (Beer) => {
        this.setState({
            cart: this.state.cart.concat([Beer])
        });
    };

    render() {
        return(
            <footer className='u-max-full-width'>
                <hr />
                <div className="u-cf"></div>
                <div className='u-pull-left'>
                    <h4>Total Cost</h4>
                </div>
                <div className='u-pull-right'>
                    <strong>$ {0}</strong>
                </div>
                <div className="u-cf"></div>
            </footer>
        );
    }
};