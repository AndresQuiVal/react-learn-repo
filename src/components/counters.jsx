import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        products : [
            { id : 1, initValue : 0},
            { id : 2, initValue : 1},
            { id : 3, initValue : 10},
            { id : 4, initValue : 2}
        ] 
    } 
    /* in here we added component composition, in whici we nested a component inisde other component,
    how do we use this nested component in the parent component? we need to call inside the parent component
    the 'this.props.children' property and it will automatically render the nested component
    */

    render() { 
        return ( 
            <div>
                { this.state.products.map((product) => (
                    <Counter key={product.id} value={product.initValue}>
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