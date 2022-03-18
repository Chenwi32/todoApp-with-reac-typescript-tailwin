import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="mt-8 input flex justify-center  container mx-auto">
      <input
        value={todo}
        onChange={(e) => {
            setTodo(e.target.value);
            console.log(todo)
        }}
        type="input"
        className="input__box"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="btn"
        /* onClick={(e)=>e.} */
      >
        Add
      </button>
    </form>
  );
};

export default InputField;
