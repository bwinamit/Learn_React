import React from "react";
import ReactDOM from "react-dom/client"; 

// React ELement=>JSX
const jsxHeading= (<h1 id="jsx">Hello From Jsx and good morning</h1>)
const root = ReactDOM.createRoot(document.getElementById("id"));

// Functional Components
const Title=()=>(
<h1>Hello from Title component</h1>
);

const Heading=()=>{

   return ( <div className="container">
        <Title/>
        <h1>Hello from Heading component</h1>;
    </div>)
} 

const Element =()=>{
    return <h1>Hello World</h1>
} ;    
root.render(<Heading/>);


