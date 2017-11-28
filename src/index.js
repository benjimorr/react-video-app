import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = "AIzaSyBxYz0ZO3IqUmOLgzUeKCD7z3aaBuqrS_c";

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and display it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
