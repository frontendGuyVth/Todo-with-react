import React, { Component } from "react";
import "/home/Mr.Spector/Desktop/Todo-with-react/src/Todo/Todo.css"

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange(evt) {
        this.setState({
            task: evt.target.value
        })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    handleToggle() {
        this.props.toggleTodo(this.props.id)
    }

    render() {

        let result;

        if (this.state.isEditing) {
            result = (
                <>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>
                            Save
                        </button>
                    </form>
                </>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>
                        edit
                    </button>
                    <button onClick={this.handleRemove}>
                        X
                    </button>
                    <li className={this.props.completed && "completed"}
                    onClick={this.handleToggle}
                    >{this.props.task}</li>

                </div>
            )
        }
        return result;
    }
}

export default Todo