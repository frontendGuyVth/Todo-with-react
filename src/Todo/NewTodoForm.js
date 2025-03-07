import React, { Component } from "react";

class NewTodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {todo: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
    }


    handleSubmit(evt){
        this.setState({
          todo: [...this.props.createTodo, evt.target.todo]
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.todo} name="todo" placeholder="Add Todo" onChange={this.handleChange}/>

                <button>
                    Submit!!
                </button>
            </form>
        )
    }
}

export default NewTodoForm