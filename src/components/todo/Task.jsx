import React, { useState } from 'react';
import remove from '../../assets/remove.png';
import unchecked from '../../assets/circle.png';
import checked from '../../assets/check.png';

const Task = ({ id, body, tasks, setTasks }) => {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };
  const [render, setRender] = useState(true);
  const handleDelete = () => {
    // Remove the task from the tasks state using the unique id
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setRender(!render);
  };

  if (!render) return null;
  else {
    const textDecoration = status ? 'line-through' : 'none';
    return (
      <div className="item flex">
        <div className="item-text flex" onClick={handleClick}>
          <img src={status ? checked : unchecked} className="circle" />
          <h3 className="h3" style={{ textDecoration }}>
            {body}
          </h3>
        </div>
        <img src={remove} className="remove" onClick={handleDelete} />
      </div>
    );
  }
};

export default Task;
