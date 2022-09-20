import { ImCross, ImCheckmark } from "react-icons/im";

const Todo = ({ title, todoId, showActions }) => {
  const deleteTodo = () => {
    fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ todoId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) window.location.reload();
        else alert("Unable to delete todo");
      });
  };
  const updateTodo = () => {
    fetch("/api/todos", {
      method: "PUT",
      body: JSON.stringify({ todoId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) window.location.reload();
        else alert("Unable to update todo");
      });
  };
  return (
    <div className="p-2 py-3 flex items-center  rounded-md border">
      <p className="flex-1">{title}</p>
      {showActions && (
        <div className="flex space-x-3 ">
          <span className=" p-2 flex  items-center border-green-500 border rounded-sm cursor-pointer">
            <ImCheckmark className="text-green-500" onClick={updateTodo} />
          </span>
          <span className=" p-2 flex  items-center border-red-500 border rounded-sm cursor-pointer  ">
            <ImCross className="text-red-500" onClick={deleteTodo} />
          </span>
        </div>
      )}
    </div>
  );
};

export default Todo;
