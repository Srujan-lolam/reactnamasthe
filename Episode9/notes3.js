//SRP - Single Responsibility Principle - any component or a function should deal with a single responsibility
//uses - reusable,maintainble,testable
//restaurentMenu should not worry about how the data is fecthed(fetchMenu) as it violates the SRP.if we somehow could able
// implement is then our job is done.custome hooks does this.(refer code for useRestaurentMenu)
//It is not mandatory to use use for a custom hook but it is recommended by the lbirary(react) to use it
//Chunking,code splitting,dynamic bundling, all are same,to break dowm oup app into multiple bundles
// why code splitting
// The ans is ,it becomes difficult to handle single js file after bundling,the size increases and our app becomes
// slow.so it is a better approach to use code spliting.assume in make my trip - all flight related components are one
// bundle,all hotels related components are one bundle etc
//Lazy loading - when we run our app,grocery will not be loaded,oly when we only click on grocery,grocery will
//be loaded.Load whenever it is required only,this is known as lazy loading or on -demand laoading or dynamic importing.refer code
//suspense is a component given by react that is used to wait until the code is fetched(loaded) instead of throwing
// an error(refer code)
