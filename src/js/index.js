import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => (
    <div>
        <h1>Todo</h1>
        <TodoForm/>
        <TodoList/>
    </div>
);

render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));
