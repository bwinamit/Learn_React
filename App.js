const parent=
    React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},[
    React.createElement("h1", {}, "Hello World from React H1 Tag!"),
    React.createElement("h2", {}, "Hello World from React H2 Tag!")
]),
React.createElement("div", {id:"child2"},[
    React.createElement("h1", {}, "Hello World from React H1 Tag!"),
    React.createElement("h2", {}, "Hello World from React H2 Tag!")
]),
);


console.log(parent)

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);
