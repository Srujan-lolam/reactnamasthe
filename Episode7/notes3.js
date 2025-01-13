// 1 ) If there is no dependency array,then the useeffect will be called everytime on component rendering
//  If there is an empty dependency array,then the useeffect is called once on inital renderingof the component
// 2) Do's on useState hook :
// i) Never declare useState hook outside the component because useState is meant to create local state variables only
// ii) Never declare useState hook inside looks like if else,for,while etc.Even though it is valid,it creates inconsistencies to out app
// iii) Try to keep all the local state variables at the top in our component so that it is easy to trace them

// 3) CreateBrowserRouter - it creates the routing configuration for our app - configuration is a list of objects which contains path and element
// to various components of our application.After creating the configuration,we need to provide this to out app which can be done by RouterProvider
//(refer code in app.js)

// 4 ) Outlet is like a temporary component porvided by react,whenever we are in home,outlet will be replaced by body(refer code),when we are in about
//outlet will be replaced by about etc

// 5) Never use anchore tag in react because it refreshes the entire application to navigate to other page.Instead use Link component ,it will not
//refresh the entire app,it just renders the component.This is single page application.- one page,just components gets interchanged

// 6) Server side routing - when we click on something (about us page),it makes a network call , fetches the data and refreshes the app to display
// it.but react is client side routing - all the data is already loaded in out app(about us,contact us etc),it will not make any network calls
