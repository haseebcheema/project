import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TODOS } from "../graphql/todoQueries";
import { ADD_TODO, DELETE_TODO } from "../graphql/todoMutations";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const { loading, error, data } = useQuery(GET_TODOS, {
    onCompleted: (data) => setTodos(data.getTodos),
    onError: (error) => {
      console.error("Error fetching todos:", error);
      alert(error.message);
    },
  });

  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
    onCompleted: (newTodo) => {
      setTodos((prevTodos) => [...prevTodos, newTodo.addTodo]);
    },
    onError: (error) => {
      console.error("Error adding todo:", error);
      alert(error.message);
    },
  });

  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
    onError: (error) => {
      console.error("Error deleting todo:", error);
      alert(error.message);
    },
  });

  const handleAddTodo = (title) => {
    addTodo({ variables: { title } });
  };

  const handleDeleteTodo = (id) => {
    deleteTodo({ variables: { id } });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    loading,
    error,
    handleAddTodo,
    handleDeleteTodo,
  };
};
