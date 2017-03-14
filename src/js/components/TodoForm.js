import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class TodoForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        const text = e.target.text;
        const value = text.value.trim();
        if (value) {
            this.props.addTodo(value);
            text.value = '';
            text.focus();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="text" required/>
                <input type="submit" value="Add"/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo: addTodo
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoForm);
