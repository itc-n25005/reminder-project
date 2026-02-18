import style from "./index.module.css";
import { todo } from "@/app/libs/microcms";

type Props = {
  todos: todo[];
};

export default function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return (
      <div className={style.empty}>
        <p>定期リマインダーがありません。</p>
        <p>予定を追加してみましょう！</p>
      </div>
    );
  }

  return (
    <ul className={style.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={style.todoItem}>
          <div className={style.todoContent}>
            <p className={style.todoText}>{todo.text}</p>
            <p className={style.todoTime}>
              {new Date(todo.time).toLocaleString()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
