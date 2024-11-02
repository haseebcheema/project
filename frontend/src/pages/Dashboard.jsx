import AddTodo from '../components/Todo/AddTodo';
import FetchTodo from '../components/Todo/FetchTodo';
import { useTodos } from '../hooks/useTodos';

const Dashboard = () => {
  const { todos, loading, error, handleAddTodo, handleDeleteTodo } = useTodos();

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo Dashboard</h1>
      <AddTodo onAdd={handleAddTodo} />
      <FetchTodo todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default Dashboard;
