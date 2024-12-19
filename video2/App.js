// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
//heading here is not an html element,it is a react object that has props called id,hellow world
// while rendering this object ,the browser converts it inot html
//the third argument(children) can be again a html element like div(nested) like below
import React from "react";
import ReactDOM from "react-dom/client";
// 2
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "heading from nested div")
//   )
// );
// //this makes codes look a bit complex,so we have jsx which makes codes look simple
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//VIDEO3
//This is a react element
const heading = React.createElement("div", { id: "parent" }, "Namasthe React");
//JSX
const jsxHeading = (
  <h1 id="heading" className="heading">
    Namasthe React 🚀
  </h1>
); //This is a jsx element,react and jsx are two different
//  things..But if we try to print heading and jsxHeading,we get same objects
const Title = () => {
  return <h1>This is title component</h1>;
};
const title1 = <h1>This is title</h1>;
let number = 100;
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <Title></Title>
      {/* Both are same(tiles above-rendering) */}
      {number}
      {title1}
      {Title()}
      {/* using {we can inject or include any js inside html},{} is so powerfull,even we call a function(react component like above also) */}
      <h1>Namasthe react functional component 🚀</h1>;
    </div>
  );
};
const HeadingComponent1 = () => <h1>Namasthe react functional component</h1>; //single line return syntax
const HeadingComponent12 = () => (
  <h1>
    <h2>This is heading2</h2>
    Namasthe react functional component
  </h1> //multiple lines returning syntax
); //(Three are valid and are same)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeadingComponent) This is not valid ,because HeadingCOmponent is not a react element
//render takes only react elements,
root.render(<HeadingComponent />); //This is valid,By using </>babel understands that this is component
