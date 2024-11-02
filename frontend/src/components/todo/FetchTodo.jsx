import PropTypes from "prop-types";

const FetchTodo = ({ todos, onDelete }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center text-lg font-semibold">
          No todos available. Add your first todo!
        </p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-gray-800 text-lg">{todo.title}</p>
              <button
                onClick={() => onDelete(todo.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchTodo;
