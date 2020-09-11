import React from "react";
import "./style.css";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ id: "learn_js", text: "Learn JavaScript", done: true },
        { id: "learn_nodejs", text: "Learn NodeJS", done: true },
        { id: "learn_react", text: "Learn React", done: false },
        { id: "learn_vuejs", text: "Learn VueJS", done: false },
        { id: "go_for_run", text: "Go for a run", done: false },
        { id: "play_cod", text: "Play Cold of Duty", done: false },
      ]
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    e.persist();
    this.setState(() => ({
      items: itemsModified(this.state.items)
		}), () => {
    	console.log(this.state.items);
    });
    
    let itemsModified = (items) => {
				items[e.target.dataset.index].done = e.target.checked ? true : false;
    		return items;
    };
  }
  
  render() {
    return (
      <div>
        <h2>Todo:</h2>
        <ol>
        {this.state.items.map((item, index) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" value={item.id} defaultChecked={item.done} onChange={this.handleChange} data-index={index} /> 
              <span className={this.state.items[index].done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}
