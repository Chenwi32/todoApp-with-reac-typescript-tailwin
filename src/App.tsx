import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./module";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState <Todo[]>([])
  return (
    <div className="  App h-screen">
      <header className="App-header container mx-auto flex justify-center">
        <h1 className="text-3xl mt-8 font-bold title">My Tasks</h1>
      </header>
      <InputField todo={todo} setTodo={setTodo}
      />
    </div>
  );
};

export default App;
