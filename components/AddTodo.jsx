import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/todos/create-todo", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ success, message }) => {
        if (success) window.location.reload();
        return message;
      });
  };
  return (
    <div className="mt-16 mx-auto w-9/12">
      <form className="flex space-x-3 " onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          placeholder="Todo"
          className="p-2  flex-1  border-gray-400 border-2 rounded-md"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button
          className="px-4  rounded-md bg-blue-500 text-white font-semibold"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
