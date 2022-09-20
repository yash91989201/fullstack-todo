import AddTodo from "components/AddTodo";
import SingleTodo from "components/SingleTodo";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then(({ success, data }) => {
        if (success) setTodos(data);
        else setErr("Unable to fetch todos");
      });
  }, []);
  return (
    <main className="max-w-3xl mx-auto flex flex-col">
      <AddTodo />
      <h2 className="mt-6 mb-3  text-xl font-semibold">Pending Tasks</h2>
      <div className="my-6 flex flex-col space-y-3 ">
        {todos.map(({ _id, title, done }) => {
          if (!done)
            return (
              <SingleTodo key={_id} title={title} todoId={_id} showActions />
            );
        })}
      </div>
      <h2 className="mt-6 mb-3  text-xl font-semibold">Completed Tasks</h2>
      <div className="my-6 flex flex-col space-y-3 ">
        {todos.map(({ _id, title, done }) => {
          if (done) return <SingleTodo key={_id} title={title} todoId={_id} />;
        })}
      </div>
    </main>
  );
};

export default Todos;
