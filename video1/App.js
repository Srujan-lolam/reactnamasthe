// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
//heading here is not an html element,it is a react object that has props called id,hellow world
// while rendering this object ,the browser converts it inot html
//the third argument(children) can be again a html element like div(nested) like below
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "heading from nested div")
  )
);
//this makes codes look a bit complex,so we have jsx which makes codes look simple
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
