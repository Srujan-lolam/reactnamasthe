//npm does not stand for node package manager,but npm is everything which means,it is package manager or standard
// repository for all the packages,utilities,libraries.npm init means creating a repo for all packages of our project
//,adding npm to our project so that we can use npm.

//after npm init,package.json is created.whenever we use any package /dependency like react,there is lot of
// infor like which version it is,this infor is stored in package.json by npm.in simple words,package.json is configuration for npm

//bundler
//when we have a project that has sdeveral files like html,css ,js etc,our whole code needs to be bundled,compressed,cleaned,minified
//before sending it to production.bundler does this thing..examples - webpack,parcel..create-react-app uses webpack and babel behind the scenes
//which does this thing.

//npm install -D parcel,there are two types of dependencies,one is dev -used in development phase only,no minification,no compression etc
//normal dependencies are used for production. -D is install parcels for dev dependency

//carret and tildet
//in package.json,for dependecies/packages,we usually get ` or ^ ,the difference is,if we put ^ ,if get minor updates,dependencies automatically updates it
//if we use ` major verions will be automatically installed if there are any..it is always safe to use ^(carret)

//what is package.json and package.lock.json
// package.lock.json keeps exact version when it is installed while package.json keeps changing the version (carret or tilted) if there are any updates.
//this exact version is maintained using the integrity(sha)

//Node modules
// containes all the code of our dependencies(here parcel),all the dependencies that parcel requires(chain of chain),that is ,it is very heavy

//why do we ignore node-modules
//all the file that need can be regenerated need not to store in git.package.lock.json contains the record of all the dependencies ,so we ignore it

//npx parcel index.html
//for using parcel(igniting our app-hosting our code to a server)
// parcel has created a server and hoisted our project

//npm i react and react-dom
//cdn links is not a preffered way to add react to our project because,it has to make a api call to fetch react which is costly
//also,if there is any change in the react version,we need tchange the version manually..so better to use as package by installing it using npm

//parcel
//HMR - hot module replacement-automatically replacesing the changes when changes are made
// FIle watching algorithm -keeps an eye on all the files by tracking every file(changes made or not),
// that is why build time is reduced every time we build becase of cahcing- .parcel-cache file
// 319 to 9
// Server running at http://localhost:1234
// ✨ Built in 319ms
// PS C:\Users\srujankumar_lolam\Desktop\Namasthe-React\notes\video2> npx parcel index.html
// Server running at http://localhost:1234
// ✨ Built in 9ms
//image optimization-loading images is expensive,parcel reduces it
//bundling
//compressing-minifying the files,reducing file size
//react is not the only thing that makes our app fast,there are many other like parcel that makes our appp fast
//for erery task -mentioned above,parcel again uses other libraries.(consider it as government..modi need amit shah ,many other ministers etc)
//code splitting-splitting our files
//differetial bundling - compatible with multiple borswers and varioud version
//error handling-neat description about the error
//tree shaing - removing unneccessary and unsed files in the production level

//browserslist
// for making our app compatible ,we use browserslist,for that configure it inside package.json file by adding browserslist
