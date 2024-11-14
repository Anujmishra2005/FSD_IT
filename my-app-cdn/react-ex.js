const parent = document.getElementById("root");
const node = React.createElement("p", { style: { color: "red" } }, "This is a new paragraph");
const root = ReactDOM.createRoot(parent);
// root.render(node);

const node1 = React.createElement("h1", {}, "Shopping Cart");
const item1 = React.createElement("li", {}, "item1");
const item2 = React.createElement("li", {}, "item2");
const list = React.createElement("ol", {},item1,item2);
const branch=<ul>
    <li>CSE</li>
    <li>IT</li>
    <li>ME</li>
</ul>;

const App=() => {       // Functional Component :--
    return(             // No Argument Function
        <div>
        <p>Semester List</p>
        <ul>
        <li>I</li>
        <li>II</li>
        <li>III</li>
        <li>IV</li>
        <li>V</li>
        <li>VI</li>
        <li>VII</li>
        </ul>
        </div>
    );
};

// Class Component :---
// class Greeting extends React Component

// To make React App using CLA way :-- npx create-react-app my-personal-app


// root.render([node,node1,list,branch]);

root.render(<App/>)


// Props is Passed using "Curly Braces"
// JSX support the Combined Codes of JS , HTML and XML i nreact