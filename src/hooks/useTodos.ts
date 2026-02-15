import { useState, useEffect } from "react";

// Todo 인터페이스 정의
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// useTodos 커스텀 훅 정의
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // todo 리스트 상태 관리

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos"); // 로컬 스토리지에 저장된 todos라는 값을 가져옴
    if (savedTodos) {
      // 저장된 값이 있다면
      setTodos(JSON.parse(savedTodos)); // 파싱하여 다시 저장
    }
  }, []);

  useEffect(() => {
    // todos의 상태가 변경되면 로컬 스토리지에 다시 저장
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 새로운 todo를 추가
  const addTodo = (text: string) => {
    // 새로운 todo라는 객체를 만들고
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    // 기존의 todo 리스트를 복사하고 새로운 todo를 추가
    setTodos([...todos, newTodo]);
  };

  // todo의 완료 상태를 업데이트 하는 함수
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(
        (
          todo, // 기존의 todo 리스트를 복사해서
        ) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo), // id가 일치하는 todo의 completed의 값을 반전
      ),
    );
  };

  const deleteTodo = (id: number) => {
    // todo 리스트에서 id가 일치하지 않는 todo만 남김
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   todos, addTodo, toggleTodo, deleteTodo 함수를 반환
  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
