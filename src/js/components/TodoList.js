import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleTodo} from '../actions';

class TodoList extends React.Component {
    render() {
        const styleCompleted = {
            textDecoration: 'line-through'
        };

        return (
            <ul>
                {this.props.todos.map(todo => (
                    <li style={todo.completed ? styleCompleted : null}
                        key={todo.id}
                        onClick={() => this.props.toggleTodo(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {todos: state};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleTodo: toggleTodo
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
