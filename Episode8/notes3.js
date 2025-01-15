//For a class based component - Extends React.Component is used to indicate the react that this is class based
// component and render method retrun a piece of js code which is displayed on the UI
// in functional component we send as argument and use them as props or destrucuting on the ply,but in class based we
//should use constructor method and super(props) inside it and access them using this.props.name(refer codes)
//this.state is a reserved keyword in class based component which is a big object used to store all the state variables
//whenever Userclass is encountered ,an instance is created,everytime an instance is created ,constructor gets
//called automatically.the flow is - encount class based component --> instance creation --> constructor invoke --> render
// method called .
//we make api calls in componentDidMount in class based components.This is because the flow should be render -> loads -> re-renders
//because react does not want to wait for rendering until the data is fetched.so it renders,loads the data,re-renders
// when the data is fetched
//if we use same class based components twice then two instances are created(in code - UserClass.js line 17,18)
