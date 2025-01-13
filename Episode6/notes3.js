// 1) Monolithic architecture
//Monolithic architecture - All the code is written in a single project .For example,all the APi code,Ui code,backend code will be in single
//project .If there a minor change in any of the file(API,UI etc) the whole project need to be deployed again which is not a good way.
//which is why everyone is preferring microservices architecture

// 2) MicroService architecture
//In this architecture,there are multiple projects for every part,a project for UI-Ui servce,API -API service etc.All interact based on
//different useCases.Also,every project is independed in its code as well.Ui can be in react,API can be something else etc but in monolithic
//entire project (UI,API) will be written in single language only like java
//all services will be run different hosts like UI on localhost:1234,backend on localhost:1000 etc and they intereact by calling this hosts.
// whenever UI need backend,it can call api url

// 3) To fetch the data dynamically ,there are two ways

// i) as soon the pages loads, make an api call ,whenever the data is fetched render the data (loads -> api call -> render)
// ii) as soon the pages loads , render the page , make an api call to fetch data ,when the data is fetched ,re-render the component
//      loads -> render the component -> fetch(api call) -> re-render
// in react , we always follow 2nd approach.because in the first approach , if suppose fetching the data takes 500ms , we do not see anything untill
//500 ms which is not a good user experience,but in the second approach,we can show something to the user(like loading...) until the data is fetched
//and then show the data when the data is fetched from the api

// 4) useEffect
// useEffect is a React hook that lets you run side effects (like data fetching, subscriptions, or DOM manipulations) in functional components after
//  rendering. It can be controlled by dependencies to run on every render, once on mount, or when specific variables change.

// 5) whenever we try to fetch data or call an api from one host ,our browser restrict to do so(CORS origin error)

// 6) Shimmar UI - It is a industry standard where we show fake Ui to the user until the actual page is rendered instead of showing spinners

// 7) conditional rendering - rendering based on certain conditions - can use if else or ternary operator

// 8) In React, changing local variables does not trigger a re-render of the component because React only re-renders components when state or
// props change.Local variables, on the other hand, are just simple JavaScript variables that exist within the component's scope and do not
// have any connection to React's rendering cycle.that is we use state variables in react rather than local variables(login and logout ex)

// 9) WE Declare state variables using const,but how setbtn or the function returned by the useState is able to change the btn eventhough it is declared
//as const.The reason is,whenever the setbtn is changing the btn the component is re-rendered,when re-rendered,the state variables acts like an empty
//variable
//The flow is setbtn --> re-rendering the component --> btn value change --> UI change

// 10) if we use value = {inputText}(a state variable),it means that we are binding the input field with the specific state variable.eventhough we type
//something in the input box ,it will not be displayed of reflected because our input field is bind to the state variable,the only way to change the
//input field in this case is changing the state variable

// 11) NOTE : Whenevr there is a change in the state variable,react triggers re-conciliation cycle(re-renders the component) but the DOM manipulation
//will only happen where there is a change-an efficient way which is why react is faster
