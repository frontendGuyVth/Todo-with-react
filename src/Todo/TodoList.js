import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.createNewTodo = this.createNewTodo.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    createNewTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos })
    }
    render() {

        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task}
                removeTodo={this.remove} updateTodo={this.update}
                completed={todo.completed}
                toggleTodo={this.toggleCompletion}
            />
        }
        )

        return (
            <div>
                <h1>Todo App</h1>

                <ul>
                    {todos}
                </ul>


                <NewTodoForm createTodo={this.createNewTodo} />
            </div>
        )
    }
}

export default TodoList