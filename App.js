import React from "react";
import ReactDOM from "react-dom/client"; 

const parent=
    React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},[
    React.createElement("h1", {key: "h1"}, "Hello World from React Amit Tag!"),
    React.createElement("h2", {key: "h2"}, "Hello World from React H2 Tag!")
]),
React.createElement("div", {id:"child2"},[
    React.createElement("h1", {key: "h3"}, "Hello World from React H1 Tag!"),
    React.createElement("h2", {key: "h4"}, "Hello World from React H2 Tag!")
]),
);


console.log(parent)

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);
