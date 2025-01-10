//This video .episode is about restructuring our code by coding principles(standard ways) and learning hooks

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
//before building any application,we should plan it before(like how the UI looks like,what are the features etc),
// so build wireframe(how it looks like)
//for example for food ordering application we can have the following - Low level component
// Header
// -logo
// -navitems
//     -about
//     -home
//     -cart
// body
//     -search Input
//     -restaurent container
//         -restaurent card
//                 -image of food
//                 -cuisine
//                 -time

// footer
//     -address
//     -links
//     -copyright etc

//putting one component in another is known as component composition
// style = {{background-color : red}} -one way of adding inline css
//const styleCard = { background-color : black} and then style = {styleCard} - second way of adding inline css

//Props

//Props means properties,these are something that we can pass as an arguments to a component
//pass arguments and then use them as props.resName etc - one way of doing
//destructure on the ply (in the function itslef write as - {resName,cuisine}) and then use directly as resName etc-second way

//config driven UI **
//Based on the data received from the backed or API ,the UI get changes(for example,swiggy UI is differenct)
//for different location based on the offers.This is known as config driven UI
