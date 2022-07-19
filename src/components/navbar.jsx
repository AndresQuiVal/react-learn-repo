import React from 'react';

/*
WHY to use Stateless Functional Component (sfc)?

SFC compoment are important when we know that we dont necesarily need a state for the component, instead
we only want to render, and if we want the props, we only need to pass as parameter the props as following:

const Navbar = (props) => {
    return (
        ...
    );
}

then reference them inside the component code itself

but also, with object destructring, we could avoid the use of props.abc like this:

const Navbar = ({ prop1, prop2, ... propN }) => {
    return (
        ...
    );
}

So whatever method you prefer is alright!
*/

const Navbar = ({ countersLength }) => {
    return (
        <nav class="navbar bg-light">
            <div class="container-fluid text-left">
                <a class="navbar-brand">Navbar</a><span class="badge badge-primary">
                    { countersLength }
                </span>
            </div>
        </nav>
    );
}

export default Navbar;