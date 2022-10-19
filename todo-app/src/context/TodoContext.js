import React, { useState, createContext } from 'react'

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Text",
            completed: false,
        },
    ]);

    const values = {
        todos,
        setTodos,
        activeFilter,
        setActiveFilter,
    };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export default TodoContext;