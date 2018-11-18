import React, { useState } from 'react'
import ReactDom from 'react-dom';

const App = () => {
    return (
        <div id="app">
            <p>Hello TDSOM!</p>
        </div>
    )
}
  
ReactDom.render((
    <App />
  ),
  document.getElementById('root')
);