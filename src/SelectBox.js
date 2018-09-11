import React, { Component } from "react";

class SelectBox extends Component {
  render() {
    return (
      <div>
        <div
          className="select-box--container"
          style={{ maxWidth: this.props.width || "500px" }}
        >
          <div className="select-box--selected-item">
            {this.props.selectedItem.value}
            <div className="select-box--arrow" onClick={this.props.dropDown}>
              <span
                className={`${
                  this.props.showItems
                    ? "select-box--arrow-up"
                    : "select-box--arrow-down"
                }`}
              />
            </div>
          </div>

          <div
            style={{ display: this.props.showItems ? "block" : "none" }}
            className="select-box--items"
          >
            {this.props.items.map(item => {
              return (
                <div
                  key={item.id}
                  onClick={() => this.props.selectItem(item)}
                  className={this.props.selectedItem === item ? "selected" : ""}
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default SelectBox;
