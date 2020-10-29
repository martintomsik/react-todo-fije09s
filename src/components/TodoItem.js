import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(
      () => ({
        items: itemsModified(this.props.state.items)
      }),
      () => {
        console.log(this.props.state.items);
      }
    );

    let itemsModified = items => {
      items[e.target.dataset.index].done = e.target.checked ? true : false;
      return items;
    };
  }

  render() {
    return (
      <li key={this.props.item.id}>
        <label>
          <input
            type="checkbox"
            value={this.props.item.id}
            defaultChecked={this.props.item.done}
            onChange={this.handleChange}
            data-index={this.props.index}
          />
          <span className={this.props.item.done ? "done" : ""}>
            {this.props.item.text}
          </span>
        </label>
      </li>
    );
  }
}
