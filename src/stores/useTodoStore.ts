// 전역 상태를 관리하기 위해 zustand를 사용
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Todo의 타입 정의
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Filter 타입
export type FilterType = "all" | "progress" | "completed";

// TodoStore의 타입을 정의
interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setFilter: (filter: FilterType) => void;
}

// TodoStore를 생성
export const useTodoStore = create<TodoStore>()(
  // 로컬 스토리지에 상태를 저장
  persist(
    // 상태 변경 함수
    (set) => ({
      todos: [], // 초기엔 빈 배열
      filter: "all", // 초기엔 전체 보기
      addTodo: (
        text, // 할일을 추가하는 함수로
      ) =>
        set((state) => ({
          // 기존 할일을 받아서
          todos: [
            ...state.todos,
            {
              // 새로운 할일을 추가
              id: Date.now(),
              text,
              completed: false,
            },
          ],
        })),

      toggleTodo: (
        id, // 할일을 변경하는 함수이며 id 값을 받아오고
      ) =>
        set((state) => ({
          // 현재 상태를 가져온뒤
          todos: state.todos.map(
            (
              todo, // 할일 목록을 순회하면서 같은 id 값이 있다면 반전 시키고 값을 저장
            ) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),

      deleteTodo: (
        id, // 할일을 삭제하는 함수이며 id 값을 받아오고
      ) =>
        set((state) => ({
          // 현재 상태를 가져온 뒤
          todos: state.todos.filter((todo) => todo.id !== id), // 할일 목록을 순회하는데, 다른 id값만 저장한다.
        })),

      setFilter: (
        filter, // 필터를 입력받아
      ) =>
        set(() => ({
          filter, // 상태를 변경
        })),
    }),
    {
      name: "todos", // 로컬스토리지 키 이름
    },
  ),
);
