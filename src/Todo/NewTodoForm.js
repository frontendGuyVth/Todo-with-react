import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "src/Todo/NewTodoForm.css"

class NewTodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {task: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        })
    }


    handleSubmit(evt){
        evt.preventDefault();
       
          this.props.createTodo({
            ...this.state,
            id: uuidv4(), 
            completed: false
    })
          this.setState({
            task: ""
          })
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task" >New Todo</label>
                <input id="task" type="text" value={this.state.task} name="task" placeholder="Add Todo" onChange={this.handleChange}/>

                <button>
                    Add Todo
                </button>
            </form>
        )
    }
}

export default NewTodoForm