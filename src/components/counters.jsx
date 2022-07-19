import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { } 
    /* in here we added component composition, in whici we nested a component inisde other component,
    how do we use this nested component in the parent component? we need to call inside the parent component
    the 'this.props.children' property and it will automatically render the nested component
    */

    render() { 
        return ( 
            <div>
                <button className='btn btn-primary m-2' onClick={this.props.onReset}>Reset</button>
                { this.props.counters.map((product) => (
                    <Counter 
                        key={product.id} 
                        counter={product}
                        onRemoveItem={this.props.onRemoveItem}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}>
                        {
                            /*<p>Embedded element (composition)</p>*/
                            /*
                            In here is defined the nested element of the component
                            */
                        }
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;