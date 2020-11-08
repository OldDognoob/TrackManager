/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {tasks.map((task)=>{
            return
        })}
      </ul>
    </div>
  );
};

export default TaskList;
