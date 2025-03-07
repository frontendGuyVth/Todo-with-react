import React, { Component } from "react";

class Todo extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <div>
                    {this.props.todos}

                </div>

                <button>
                    delete
                </button>
            </section>

        )
    }
}

export default Todo