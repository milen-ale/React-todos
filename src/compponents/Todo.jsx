import React, { useState } from 'react';
import '../App.css';

function Todo() {
  const [todo, setTodo] = useState(' ');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      // eslint-disable-next-line no-return-assign
      const upedatedTodos = todos.map((t) => (t.id === editTodo.id ? (t = { id: t.id, todo })
        : { id: t.id, todo: t.todo }));
      setTodos(upedatedTodos);
      setEditId(0);
      setTodo('');
      return;
    }

    if (todo !== '') {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo('');
    }
  };

  const handleDelete = (id) => {
    const removeTodo = todos.filter((to) => to.id !== id);
    setTodos([...removeTodo]);
  };

  const handleUpdate = (id) => {
    const updateTodo = todos.find((i) => i.id === id);
    setTodo(updateTodo.todo);
    setEditId(id);
  };

  return (
    <div className="Todo">
      <div className="conatainre">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">{editId ? 'Edit' : 'Add'}</button>
        </form>
        <div className="todo-List">
          <ul className="todoList-ul">
            {
          todos.map((t) => (
            <li key={t.id} className="todo-lists">
              <span className="singleTodo" key={t.id}>{t.todo}</span>
              <button type="button" className="btn" onClick={() => handleUpdate(t.id)}> Edit</button>
              <button type="button" className="btn" onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))
        }
          </ul>

        </div>

      </div>
    </div>

  );
}

export default Todo;
