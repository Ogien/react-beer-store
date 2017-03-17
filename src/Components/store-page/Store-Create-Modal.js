import React, {Component} from 'react';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            showResults: false
        };
    }

    handleSubmit = (e) => {
        // Deconstruct the values out our main refs
        const { 
            title: {value: title},
            summary: {value: summary}, 
            cost: {value: cost},
            img: {value: img}
        } = this.refs;

        if (!(title && summary && cost && img)) return;

        this.props.add({
            title,
            summary,
            cost,
            img
        });
        this.hide();
    };

    show = () => {
        this.setState({ showResults: true });
    };

    hide = () => {
        this.setState({ showResults: false });
        Object.keys(this.refs).map( ref => this.refs.value = '');
    };

    render() {
        return (
            <section id="create">
                { this.state.showResults ?

                    <div className="create-form">
                        <h3>Create a Beer</h3>
                        <form>
                            <input type="text" ref="img" accept="image/*" placeholder="Image url" required/> <br/>
                            <input type="text" ref="title" placeholder="Name" required/> <br/>
                            <input type="text" ref="summary" placeholder="Summary" required/> <br/>
                            <input type="text" ref="cost" placeholder="Cost" required/> <br/>
                            <input type="submit" value="Submit" className="button-primary" onClick={this.handleSubmit} />
                            <input type="button" value="Cancel" onClick={this.hide} />
                        </form>
                    </div> :

                    <button onClick={this.show}>
                        Create a Beer
                    </button>
                }
            </section>
        );
    }
};
