import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onAdd(title);
      setTitle(""); // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
