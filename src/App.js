import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
import React, { Component } from 'react';

class App extends Component {

  /*
  Since the <Navbar/> component requires to know the length of the counters available, we need to
  lift the state up into the common parent, which is the <App/> component, and in here, we define
  in the state the counters themselves
  
  NOTE: that for counters.jsx we could use object destructring like this:

  const { prop1, prop2, prop3, ... propN } = this.props;

  this in order to avoid this.props repetition having code cleaner.

  REFER TO: navbar.jsx to see object destructring for props in stateless function compoments...
  */

  state = {
    products : [
      { id : 1, initValue : 0},
      { id : 2, initValue : 1},
      { id : 3, initValue : 10},
      { id : 4, initValue : 2}
    ] 
  }

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

  handleReset = () => {
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
      <React.Fragment>
        <Navbar countersLength={this.state.products.length}/>
        <main className='container'>
          <Counters 
            counters={this.state.products}
            onRemoveItem={this.handleRemoveItem}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}/>
        </main>
      </React.Fragment>
    );
  }

}

export default App;
