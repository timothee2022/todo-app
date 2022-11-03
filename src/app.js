import React from 'react';

import ToDo from './components/todo/todo.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SettingsForm from './components/SettingsForm';
// import SettingsForm from './components/SettingsForm'

export default class App extends React.Component {

  // const [ todoItem, assignedTo, difficulty ] = useContext(todoContext);

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDo />}/>
          {/* <Route path="/settings" element={<SettingsForm />}/> */}
        </Routes>
      <ToDo />
      </BrowserRouter>
    );
  }
}
