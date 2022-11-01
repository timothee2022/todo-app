import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { createStyles } from '@mantine/core';
// import './styles.scss';

import { v4 as uuid } from 'uuid';

export const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.blue[9],
    borderRadius: theme.radius.sm
  },

  h1: {
    backgroundColor: theme.colors.gray[9],
    borderRadius: theme.radius.sm,
    padding: '1rem',
    margin: '2rem'
  }

}));

const ToDo = () => {

  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header>
        <h1 className={classes.h1}>To Do List: {incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2 >Add To Do Item</h2>
        <ul>
          <label>
            <span>To Do Item</span>
            <ul>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </ul>
          </label>
        </ul>

        <ul>
          <label>
            <span>Assigned To</span>
            <ul>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </ul>
          </label>
        </ul>

        <ul>
          <label>
            <span>Difficulty</span>
            <ul>
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            </ul>
          </label>
        </ul>

        <ul>
          <label>
            <button
              className={classes.button}
              type="submit">Add Item
            </button>
          </label>
        </ul>
      </form>

      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

    </>
  );
};

export default ToDo;
