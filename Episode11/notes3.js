// 1) Higher Order Components - it is a function that takes a components and returns a components
// Basically it enhances the component it takes as input and returns the enhanced component as output
//refer the code - RestarentPromoted is a higher order component that is takng RestaurentCard as input
//and adding label to it and returning a new component(js function)

// 2) controlled and uncontrolled components
//when the component has its own state for manageing mthen it is known as uncontrolled compnent(remember example
//for custodian open close,every restaurentCard has thier own state).when the state is managed by parent compnent
//then it is known as controlled component -- for controlled components we use lifting the state up(refer code)
//showIndex has set in restaurentMenu component instead of restaurentCategory component

// 3) React dev tools is a chrome extension which gives some additional developer tools fot debgugging.It has
// components which gives list of components of our application (virtual DOM of current page) and profiler,which is
//used to record the activities of the user in the application.

//4 Prop drilling
//passing data from top level to low level via all the intermediatery comonents(levels ) is known as prop dirlling
//this is not a good way (not a recommended way) because even though intermediatery levels do not require any data
//the data is still passed through them
// to avoid this we use useContext(it is like a global place from which everyone from anywhere can access wihout passing
// through intermediatery levels)
//refer code(UserContext.js for creatring the context and useContext hook for using the context)

//can be used in two ways : one way is using useContext hook like above and second way is consumer(refer aboutus component)
//UserContext.consumer is a component in which it provides teh access to the context data refer code
//similarly we can use UserContext.provider with a certain value and wrap our components like header to use the value specified
//in simplw words,we can ovverride the data using UserConrext.Provider
//we can even use multiple nested providers - perfectly valid
