import React from 'react';
import './style.css';
import TodoItem from './TodoItem';

export default class App extends React.Component {

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
    }

    render() {
        return (
            <div>
                <h2>Todo:</h2>
                <ol>
                    {this.state.items.map((item, index) => (
                        <TodoItem key={index} index={index} item={item} state={this.state} />
                    ))}
                </ol>
            </div>
        )
    }

}
