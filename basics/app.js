class Hello extends React.Component {
  constructor() {
    super();
  }

  name = () => {
    const names = ["nick", "efe", "👩🏽‍🌾", "james", "Tia", "Fran"];
    return names[Math.floor(Math.random() * names.length)];
  };

  render() {
    return <h1>Hello {this.name()}</h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
