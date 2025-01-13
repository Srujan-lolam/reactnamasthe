//FOr building large scale applications,all the static data is put on CDN to ensure smooth and faster user experience

//always writing res.data.name,res.data.Time etc is not a good way of writing.It is not a clean code.Instead
// destructure the objects(refer code) and use it

//WHY KEY
//whenever we loop over a list,always use Key attribute to uniquely identify every child element.
//if we don't use key attribute,suppose if there are any additional child elemendts(restaurents in out case) to be added
//then react cleans up and re renders all the child components from the start(restaurents in our case) as it could not
//identify changes made to them(restaurents addition - in our case).If we use key,only the added component (restaurent
//  in our case will render).This is an optimization technique
// NOTE : Never index as keys ((restaurent,index) => {...})
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
