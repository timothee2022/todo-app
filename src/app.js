import React from 'react';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {

  // const [ todoItem, assignedTo, difficulty ] = useContext(todoContext);

  render() {
    return (
    <ToDo />
    );
  }
}
