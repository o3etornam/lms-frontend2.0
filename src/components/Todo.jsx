import React, { useState } from "react";

const Todo = ({ name, tasks, color }) => {
  return (
    <div className="p-4 mr-0 ml-0">
      <h2 className="text-2xl text-gray-500 font-semibold mb-0 border-b-2 border-indigo-500">
        {name}
      </h2>
      <ul className=" text-sm list-disc">
        {tasks.map((task, index) => (
          <li key={index} className={`text-${color}-500 pt-0 ps-0 mb-1`}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
