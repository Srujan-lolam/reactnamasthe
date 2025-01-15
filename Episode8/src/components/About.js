import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props); //automatically empty object if there are not passed any
    console.log(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent component mounted");
  }
  render() {
    console.log("parent rendering");
    return (
      <div>
        <h3>This is About Us Page</h3>
        <UserClass name="srujan(class)" />
        <UserClass name="akshay(class)" />
      </div>
    );
  }
}

// function About() {
//   return (
//     <div>
//       <h3>This is About Us Page</h3>
//       {/* <User name={"srujan(function)"} /> */}
//       <UserClass name="srujan(class)" />
//       {/* first one is string literal ,second one is js expression(not much diff in terms of value) */}
//     </div>
//   );
// }

export default About;
