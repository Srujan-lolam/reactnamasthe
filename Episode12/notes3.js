//1)  Redux is a library that is primarly used for state management . It is not mandatory to use in our projects.It
//offers easy debugging (redux-dev-tools) ,handles large scale data effieciently.Zustand is another library similar
// to Redux

// 2) Redux team offers 2 libraries to use : react-redux and redux-toolkit . redux-toolkit is the latest library which
// offer easy way of writing code ,simpler code ,need not to worry about too many packages as it handles implicitily

// 3) Redux store -It is a large javscript object that is used hold the data (but is it good to hold the entire data
// in a single object - yes , redux offers a concept called slices,cart slice,user slice etc)

// 4) Flow of redux - when we click on add button , it will dispatch an action , action will call a function(reducer) which
// actually changes the slice of redux store(cart in our case) . For reading the data from the slice of redux , selector is
// used . (i) add button --> dispatch an action --> calls reducer func --> update the value . (ii) slice of redux-->selector -->
// display the value . (header component is subcribing to the store-updating when clicked is automatically done by redux as we have subscribed it)

//5) Redux toolkit --> install @redux/toolkit , install react-redux

//6) building our store - create a function using configureStore from reduxjs/toolkit in utils(appStore.js),add slices
//  in it.we have to link our app with the store so we provider from react-redux/wrap the entire root app inside provider

// 7) createSlice function returns an object which contains actions and reducer objects .this is why we export them
//our store contains reducer which in turn contains small reducers for each slice..refer code for this point
//useSelector is a hook that is used for subscribing to the app store

// 8) This is more efficient as as the entire store is not subscribed here,only cart slice portion is subscribed.iven if there
//a change in login slice ,this cartItems will not be effected

//9 ) app will have one reducer where as slices will have reducers (addItem etc) and we will export only reduce from cartSlice

//10 ) even though we are directly changing the state (mutuating the state in code) , redux is taking care of creating
// a copy and immutating which is earlier done by the developers by using immer library

// 11 ) if we do state = [] in clearCart function , we are not mutating the state which is why it does not work if run the code
// instead it is just adding a refernce to it(state = [] means changing locally only)

//12 ) if we retur anything from the reducers(addItems etc),then the original state will changed to whatever it returned

//13) RTK query is used for fetching the data
