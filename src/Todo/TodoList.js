import React, {Component} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = {
           todos: []        
        }
        this.createNewTodo = this.createNewTodo.bind(this)
    }

    createNewTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {

        const todoData = this.state.todos.map(todo => (
            <Todo todos={todo} />
        )
        )
        
        return(
            <div>
                <h1>Todo App</h1>
                {todoData}

                <NewTodoForm createTodo={this.createNewTodo} />
            </div>
        )
    }
}

export default TodoList