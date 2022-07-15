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
    render() { 
        return ( 
            <div>
                { this.state.products.map((product) => (
                    <Counter key={product.id} value={product.initValue} />
                ))}
            </div>
        );
    }
}
 
export default Counters;