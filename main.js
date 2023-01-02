//MY CODE
//Js
// const head=document.createElement("h1");
// head.innerHTML="Hello World"; 
// const root=document.getElementById("root");
// root.append(head);
//react
// const heading= React.createElement("h1", {}, "My first React Code :)");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
//-----------------------end-----------------
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);