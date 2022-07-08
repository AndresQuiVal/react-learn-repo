import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        counter : 1,
        listItemsToRender : ["elem1", "elem2", "elem3"]
        /* to render list items, we need to use the map method of the buil-in object of 
        the lists, in that way you can render html elements in the virtual DOM with the javascript
        content shared*/
    } 

    /*
    With this way you can create style objects for the html elements, the thing 
    is that, if you have multiple elements that require styles, you would need
    multiple objects, therefore is not convenient, then use inserted objects in styles...
    */

    styles = { 
        fontSize : 10,
        fontWeight : 'bold'      
    }

    render() { 
        return (
            <React.Fragment>
                <p style={this.style}>
                    Counter value: {this.formatCounter()}
                </p>
                <p style={{fontSize : 20, fontWeight : 'lighter'}}>
                    An example of an inserted style object 
                </p>
                <p className='btn btn-primary'>
                    adios mundo
                </p>
                <ul>
                    {this.state.listItemsToRender.map(item => <li>{item}</li>)}
                </ul>
                <button>Increment counter</button>
            </React.Fragment>
        );
    }

    formatCounter = function() {
        let { counter } = this.state;
        return counter === 0 ? <h1>Tu contador es incorrecto</h1> : <h4>Contador con valor {counter}</h4>;
    }
}
 
export default Counter;