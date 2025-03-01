import React from 'react';
import ReactDOM from 'react-dom/client';

const parentElement = React.createElement('div',
    {id: "parentContainer"}, 
    React.createElement('div', 
        {id: 'childContainer'}, 
        [
            React.createElement('h1',{id: 'heading_01' , key: 'heading_01'},"Heading One"),
            React.createElement('h1',{id: 'heading_02', key: 'heading_02'},"Heading Two")
        ]
    )
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(parentElement);