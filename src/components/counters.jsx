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

    handleRemoveItem = (counter) => {
        let prevProducts = this.state.products.filter((elem) => elem.id !== counter.id)
        this.setState({ products : prevProducts })
    }

    handleIncrement = (counter) => {
        /*
        In here we are creating a copy of the products array, then we are modifying the actual counter object
        ; for that we are giving as parameter to counter[index] a copy of the counter object, then we
        increase the initValue and re-set the state of the copied list into the component

        NOTE: we could avoid:
        1. Avoid the copy of the counter object with the spread operator since:
            The object to modify is the object passed in paraneters, but since are reference type and to avoid
            memory discrepancies, we create a copy (again, practical uses)
        2. The search with the indexOf() and the counters[index].initValue++; since:
            if we only use counter.initValue++; we are modifying from the list the counter object property, which
            should affect also the list itself beacuse again, are reference types, and changes should be presented
            in both sides beacuse of the reference types of them
        */
        const counters = [...this.state.products]
        const index = this.state.products.indexOf(counter);
        counters[index] = {...counter};
        counters[index].initValue++;
        this.setState({ products : counters });
    }

    handleDecrement = (counter) => {
        if (counter.initValue === 0) {
            return;
        }

        const counters = [...this.state.products]
        // const index = this.state.products.indexOf(counter);
        // counters[index] = {...counter};
        counter.initValue--;
        //counters[index].initValue--;
        this.setState({ products : counters });
    }

    resetCounterValues = () => {
        let products = this.state.products.map(e => {
            e.initValue = 0;
            return e;
        })

        this.setState({ products })
    }

    /*
    Theres an important principle when we want to change the state of a component, and is this:

    'ONLY the component is allowed to modify its own state, no other'

    This is since state are private to the context of the class component itself, therefore we either
    dont have access to them outside of the context of the class 

    So for instance, in the example of the method handleRemoveItem, in the Counter component we are passing
    the reference of the function with the property 'onRemoveItem'; this is a naming convention that when
    we want to pass into parameters function to a component, we pass the EVENT as on... (camel cased) 

    And then in the Counter component we are calling the reference of the function passing the id as argument
    (REFERENCE counter.jsx to see more details of how its being called...)
    */

    render() { 
        return ( 
            <div>
                <button className='btn btn-primary m-2' onClick={this.resetCounterValues}>Reset</button>
                { this.state.products.map((product) => (
                    <Counter 
                        key={product.id} 
                        counter={product}
                        onRemoveItem={this.handleRemoveItem}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}>
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