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
