import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = "AIzaSyBxYz0ZO3IqUmOLgzUeKCD7z3aaBuqrS_c";

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and display it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
