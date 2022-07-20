import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        // counter : this.props.counter.initValue, // references the dynamic arguments passed through the component
                                    // in other components..
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

   //constructor() { 
        /*
        Since the handleIncrement function is being used as the click function for the button,
        the 'this' keyword does not exists in the context of the current class, i.e. doesnt
        know about the current component instance, therefore we have 2 choices:

        1. We override the constructor and just the the handleIncrement function to a new function
        with the 'this' keyword binded
        or 

        2. We can create an arrow function and since how arrow functions work is that they intherit 
        the 'this' keyword from the upper context (since they dont naturally have them)
        */
        // use instead of arrow functions...
        // super(); 
        // this.handleIncrement = this.handleIncrement.bind(this)

        // this.setState(), a super NONO in react, since the setState
        // CAN ONLY BE called after the render() method is called, i.e. the component
        // is rendered

        /*
        Also, if we call this.props, will return undefined, how can we use this.props?
        we need to pass in parameter to the contructor the props as following:

        constructor(props) {
            super(props);
            ...
            this.props.abc -> this will work!
        }        
        */
   // }

    handleIncrement = () => {
        this.setState({ counter : this.state.counter + 1 })
        /* React needs to find a way in which it can update the UI whenever a variable or some
        'backend' process has been updated, therefore the way to know it is by calling the
        setState() function, in which as parameter we need to pass the state object with the
        properties that we want to update, and set the new value

        this what does is, syncs the react DOM with the current HTML dom, and updates it, whereas
        in Angular, it updates automatically, here we need to explicitly set the change...
        
        Algo IMPORTANT:
        how this.setState() works:

        when we call that method, a call to render() is scheduled, in order to re-render the DOM
        but this time react will only compare elements that have changed between all of the HTML
        and will only update those, for more information see: 

        - https://www.geeksforgeeks.org/reactjs-setstate/#:~:text=It%20ensures%20that%20the%20component,current%20updated%20value%20on%20console.
        */
    }

    // handleDecrement = () => { // commented since its not longer being used!
    //     if (this.state.counter > 0) {
    //         this.setState({ counter : this.state.counter - 1 });
    //     }
    // }

    renderListElements() {
        /*
        In this way you can dinamically render values based on a list, in this case
        if there are no elements, we render an <h1> tag that says:
            NO hay elementos para compartir
        */
        if (this.state.listItemsToRender.length === 0) return <h1>NO hay elementos para compartir</h1>;
        return this.state.listItemsToRender.map(item => <li>{item}</li>);
    }

    render() {
        return (
            // NOTE: <React.Fragment> is not a block element..., whereas div is
            <div>
                <p className='badge badge-primary m-3'>
                    <p>{this.formatCounter()}</p>
                </p>
                { /*this.props.children*/ }
                {
                    /*
                    <ul>
                        {this.renderListElements()}
                    </ul>
                    */
                }
                <button className="btn btn-dark m-1" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                <button className="btn btn-dark m-1" onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                <button className="btn btn-danger m-1" onClick={() => this.props.onRemoveItem(this.props.counter)}>REMOVE</button>
            </div>
        );
    }

    formatCounter = function() {
        let counter = this.props.counter.initValue;
        return counter === 0 ? "No elements added" : counter;
    }
}
 
export default Counter;