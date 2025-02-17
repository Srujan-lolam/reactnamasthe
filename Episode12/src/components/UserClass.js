import React from "react";
import UserContext from "../../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {},
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log("child component mounted");
    const data = await fetch("https://api.github.com/users/Srujan-lolam");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log("child render");
    const { count, count2 } = this.state;
    const { login, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <div>
          LoggedInUser :
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1 className="font-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
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
        <h2>Name: {login}</h2>
        <h3>Location : {location}</h3>
        <h4>Designation : {this.props.designation}</h4>
      </div>
    );
  }
}
export default UserClass;
