import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("child component mounted");
  }
  render() {
    console.log("child render");
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 - 1,
            });
          }}
        >
          Inncrese
        </button>
        <h1>Count : {count2}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location : Hyderabad</h3>
        <h4>Designation : Software Engineer</h4>
      </div>
    );
  }
}
export default UserClass;
