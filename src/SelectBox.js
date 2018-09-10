import React, { Component } from "react";

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showItems: false,
      selectedItem: {}
    };
    this.dropDown = this.dropDown.bind(this);
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      items: newProps.items,
      selectedItem: newProps.items && newProps.items[0]
    });
  }
  dropDown() {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  }
  selectItem(item) {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  }
  render() {
    return (
      <div>
        <div
          className="select-box--container"
          style={{ maxWidth: this.props.width || "500px" }}
        >
          <div className="select-box--selected-item">
            {this.state.selectedItem.value}
            <div className="select-box--arrow" onClick={this.dropDown}>
              <span
                className={`${
                  this.state.showItems
                    ? "select-box--arrow-up"
                    : "select-box--arrow-down"
                }`}
              />
            </div>
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className="select-box--items"
          >
            {this.state.items.map(item => (
              <div
                key={item.id}
                onClick={this.selectItem.bind(this, item)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default SelectBox;
