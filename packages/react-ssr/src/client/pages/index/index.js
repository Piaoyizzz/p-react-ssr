import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    alert("点击了~");
  }

  render() {
    return <h1 onClick={this.handleClick.bind(this)}>Click Here!</h1>;
  }
}

export default Index;
