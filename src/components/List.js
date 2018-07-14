class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemValue: '',
      items: []
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  handleValueChange(event) {
    this.setState({ itemValue: event.target.value });
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.setState(prevState => {
        const currentItems = prevState.items;

        currentItems.push(prevState.itemValue);

        return { items: currentItems, itemValue: '' };
      });
    }
  }

  renderList() {
    return this.state.items.map((item, index) => (
      <ListItem key={`${item}-item-${index}`}>{item}</ListItem>
    ));
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.itemValue}
          onChange={this.handleValueChange}
          onKeyDown={this.handleKeyPress}
        />
        <div className="items-list">{this.renderList()}</div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#list_container');
ReactDOM.render(<List />, domContainer);
