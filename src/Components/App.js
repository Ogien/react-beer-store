import React, {Component} from 'react';;
import CheckoutBar from './footer/CheckoutBar';
import Header from './header/Header';
import Rebase from 're-base';
import Create from './store-page/Store-Create-Modal';

const base = Rebase.createClass('https://beer-store.firebaseio.com/');

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            beers: []
        };
    }

    componentDidMount(){
        base.syncState('beers', {
            context: this,
            state: 'beers',
            asArray: true
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    handleAddBeer = (newBeer) => {
        this.setState({
            beers: this.state.beers.concat([newBeer])
        });
    };

    render(){
        return(
            <div className="container">
                <Header title='Beer Store'>
                    <Create add={this.handleAddBeer} />
                </Header>
                {React.cloneElement(this.props.children, {beers: this.state.beers})}
                <CheckoutBar />
            </div>
        );
    }
}