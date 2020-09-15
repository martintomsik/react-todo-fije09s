import React from 'react';
import faker from 'faker';
import './style.css';
import TodoItem from './TodoItem';

export default class App extends React.Component {

    number_generated_items = 10;

    constructor(props) {
        super(props)

        let items = [
            { id: "learn_js", text: "learn JavaScript", done: true },
            { id: "learn_nodejs", text: "learn NodeJS", done: true },
            { id: "learn_react", text: "learn React", done: false },
            { id: "learn_vuejs", text: "learn VueJS", done: false },
            { id: "go_for_run", text: "go for a run", done: false },
            { id: "play_cod", text: "play Cold of Duty", done: false },
        ]
        
        // Fake some other items.
        this.fakerGenerateItems().forEach((e) => {
            items.push(e);
        });

        this.state = { items: items }
    }

    fakerGenerateItems() {
        let items = [];
        Array(this.number_generated_items).fill().forEach(element => {
            items.push(
                { id: faker.lorem.slug(3), text: faker.lorem.words(3), done: faker.random.boolean() },
            );
        });
        return items;
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
