//This video .episode is about restructuring our code by coding principles(standard ways) and learning hooks

import { useState } from "react";

//Everything than is done using react can also be done using normal html,css and javascript.The only use is
//it makes our job easy by providing some build in features

//React does not have any official or recommended way for folder structure.It is not mandatory to seperate every file
//from each other.It's the developer choice .But ,in ,reality an application will have 1000's of components.
//So,maintaining a specific folder structure is better

//It is again developer choice to use js extension of jsx extension.Hardly there is a slight difference.Jsx ,at the end
//is a javascript code.Don't overhtink on it..keeping js extension keeps the code simple,easy to maintain

//Never ever keep a hardcoded data or mock data in any component-it is not industry standard

//Explained about Named export and default export - 2 ways (you know)

//When using filtering feature for top rated components,using handleClick and filter,the restaurents are getting filtered
//but the UI is not updating.That is where react comes into picture(hooks).

// HOOK
// It is a normal javascript utitlity function giving by react with some supernatural powers.most usefull hooks are
// useState and useEffect

// UseState(a special state variable which has some super natural powers) - useState is a React Hook that allows you to add state
// management to functional components. It returns a state variable and a function to update that state, enabling reactivity in the component.
//In react ,if we want to re-render the UI,state variables are the only sources.when a state variable changes,the UI re-renders which does
//not happen in the case of regular variables

//Reconciliation - also know as React FIbre
//Whenever there is UI,react creates a virtual DOm(virtual Dom is arepresentation of actual DOM and actual DOM is representation of code(div,h1 etc))
//DIff algorithm-alwasy find the diff between virtual and actual DOM,if there is any diff,then it re-renders
//this is why react is fast and more popular in the market.As soon as we can any setListof..function,react start reconciliation algorithm

//const [list,setList] = useState(res) ==> this is array destructuring on the ply,we can write it as
// const arr = useState(res)
// const [list,setList] = arr like this also
